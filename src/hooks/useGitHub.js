import { useState, useEffect } from "react";
import { CONFIG } from "../config/portfolio.config";

const CACHE_KEY = "gh_repos_cache";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

/**
 * Fetches public repos from GitHub for the configured username.
 * Results are cached in sessionStorage to avoid rate-limit hits on every render.
 */
export function useGitHub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      // ── Check cache ──────────────────────────────────────────
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, ts } = JSON.parse(cached);
          if (Date.now() - ts < CACHE_TTL) {
            setRepos(data);
            setLoading(false);
            return;
          }
        }
      } catch (_) {
        /* ignore parse errors */
      }

      // ── Fetch from GitHub API ────────────────────────────────
      try {
        const { username, exclude, tagOverrides } = CONFIG.github;
        const token = import.meta.env.VITE_GITHUB_TOKEN; // optional — avoids rate limit

        const headers = token ? { Authorization: `token ${token}` } : {};

        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { headers },
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const raw = await res.json();

        const filtered = raw
          .filter((r) => !r.fork) // hide forks
          .filter((r) => !exclude.includes(r.name)) // hide excluded
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description || "",
            url: r.html_url,
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language,
            topics: r.topics || [],
            updatedAt: r.updated_at,
            // Apply manual tag overrides from config
            tags:
              tagOverrides[r.name] ||
              (r.topics?.length
                ? r.topics
                : r.language
                  ? [r.language]
                  : ["Other"]),
          }));

        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: filtered, ts: Date.now() }),
        );
        setRepos(filtered);
      } catch (err) {
        console.error("GitHub fetch failed:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
