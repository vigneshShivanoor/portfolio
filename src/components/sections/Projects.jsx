import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiGitBranch,
  FiSearch,
} from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import SkeletonCard from "../ui/SkeletonCard";
import Tag from "../ui/Tag";
import { useGitHub } from "../../hooks/useGitHub";
import { CONFIG } from "../../config/portfolio.config";

/* ── Featured project card ────────────────────────────────── */
function FeaturedCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      className="glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-mono font-semibold"
          style={{ background: "rgba(0,115,230,0.12)", color: "var(--accent)" }}
        >
          Featured
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Demo"
              className="transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3
        className="font-display font-bold text-base mb-2 group-hover:text-[var(--accent)] transition-colors"
        style={{ color: "var(--text)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4 flex-1"
        style={{ color: "var(--muted)" }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── GitHub repo card ─────────────────────────────────────── */
function RepoCard({ repo }) {
  return (
    <motion.a
      layout
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      className="glass rounded-2xl p-5 flex flex-col hover:-translate-y-1 transition-transform duration-300 group block"
    >
      <div className="flex items-center justify-between mb-2">
        <FiGithub size={16} style={{ color: "var(--muted)" }} />
        <div className="flex gap-3 text-xs" style={{ color: "var(--muted)" }}>
          <span className="flex items-center gap-1">
            <FiStar size={12} />
            {repo.stars}
          </span>
          <span className="flex items-center gap-1">
            <FiGitBranch size={12} />
            {repo.forks}
          </span>
        </div>
      </div>
      <h3
        className="font-display font-bold text-sm mb-1 group-hover:text-[var(--accent)] transition-colors break-words leading-snug"
        style={{
          color: "var(--text)",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {repo.name.replace(/_/g, " ")}
      </h3>
      <p
        className="text-xs leading-relaxed mb-3 flex-1"
        style={{ color: "var(--muted)" }}
      >
        {repo.description && repo.description !== "No description provided."
          ? repo.description
          : ""}
      </p>
      <div className="flex flex-wrap gap-1">
        {repo.tags.slice(0, 4).map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </motion.a>
  );
}

/* ── Main section ─────────────────────────────────────────── */
export default function Projects() {
  const { repos, loading, error } = useGitHub();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const categories = CONFIG.projectCategories;

  // Filter featured projects
  const filteredFeatured = useMemo(() => {
    return CONFIG.featuredProjects.filter((p) => {
      const matchCat =
        activeFilter === "All" ||
        p.category === activeFilter ||
        p.tags.includes(activeFilter);
      const matchQ =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [activeFilter, search]);

  // Filter GitHub repos
  const filteredRepos = useMemo(() => {
    return repos.filter((r) => {
      const matchCat =
        activeFilter === "All" ||
        r.tags.some((t) =>
          t.toLowerCase().includes(activeFilter.toLowerCase()),
        ) ||
        (r.language || "").toLowerCase().includes(activeFilter.toLowerCase());
      const matchQ =
        search === "" ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchQ;
    });
  }, [repos, activeFilter, search]);

  const visibleRepos = showAll ? filteredRepos : filteredRepos.slice(0, 6);

  return (
    <SectionWrapper id="projects" className="section-pad">
      <SectionHeading
        label="What I've Built"
        title="Projects"
        highlight="Projects"
      />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2"
            size={15}
            style={{ color: "var(--muted)" }}
          />
          <input
            type="text"
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={
                activeFilter === cat
                  ? { background: "var(--accent)", color: "#fff" }
                  : {
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured projects */}
      {filteredFeatured.length > 0 && (
        <div className="mb-10">
          <h3
            className="font-display font-bold text-sm uppercase tracking-wider mb-4"
            style={{ color: "var(--muted)" }}
          >
            ★ Featured
          </h3>
          <AnimatePresence mode="popLayout">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredFeatured.map((p) => (
                <FeaturedCard key={p.id} project={p} />
              ))}
            </div>
          </AnimatePresence>
        </div>
      )}

      {/* GitHub repos */}
      <div>
        <h3
          className="font-display font-bold text-sm uppercase tracking-wider mb-4"
          style={{ color: "var(--muted)" }}
        >
          GitHub Repositories
        </h3>

        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {error && (
          <p
            className="text-sm text-center py-8"
            style={{ color: "var(--muted)" }}
          >
            Couldn't load GitHub repos —{" "}
            <a
              href={CONFIG.social.github}
              className="underline"
              style={{ color: "var(--accent)" }}
            >
              view directly on GitHub
            </a>
          </p>
        )}

        {!loading && !error && (
          <>
            <AnimatePresence mode="popLayout">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleRepos.map((r) => (
                  <RepoCard key={r.id} repo={r} />
                ))}
              </div>
            </AnimatePresence>

            {filteredRepos.length > 6 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAll((s) => !s)}
                  className="btn-outline text-sm px-8"
                >
                  {showAll ? "Show Less" : `Show All (${filteredRepos.length})`}
                </button>
              </div>
            )}

            {filteredRepos.length === 0 && !loading && (
              <p
                className="text-center py-8 text-sm"
                style={{ color: "var(--muted)" }}
              >
                No repos match your filter.
              </p>
            )}
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
