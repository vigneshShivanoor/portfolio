import React from "react";
import { Code, ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const projectsData = [
    {
      title: "GCET Transport Grievances",
      date: "Jan 2023",
      description:
        "Developed a complaint system using HTML, CSS, Java, JSP, and PHP to report bus-related issues directly to the admin.",
      technologies: ["Java", "JSP", "PHP"],
      githubUrl: "https://github.com/vigneshShivanoor/Bus-Tracking-using-php",
      color: "blue",
    },
    {
      title: "Bus Tracking System",
      date: "June 2023",
      description:
        "Created a website for college transport with real-time bus tracking and integrated complaint features.",
      technologies: ["Java", "Real-time", "Mobile"],
      githubUrl: "https://github.com/vigneshShivanoor/java-awt-",
      color: "green",
    },
    {
      title: "Industrial Project Based Learning",
      date: "Oct 2023 - May 2024",
      description:
        "Multiple ML projects including Schirmer's Test, Crime Analysis, and Leukemia Cancer Detection using Python and Flask.",
      technologies: ["Python", "Flask", "ML"],
      githubUrl: "https://github.com/vigneshShivanoor/industry",
      color: "purple",
    },
    {
      title: "IEEE SB Website for GCET",
      date: "May 2024",
      description:
        "Comprehensive website for IEEE student branch featuring projects, events, and online membership registration.",
      technologies: ["React.js", "Responsive"],
      githubUrl: "https://github.com/vigneshShivanoor/miniproject",
      color: "indigo",
    },
    {
      title: "Faculty Leave Management System",
      date: "2024",
      description:
        "Comprehensive leave management system with application, withdrawal, and approval workflow for faculty.",
      technologies: ["React.js", "Workflow"],
      githubUrl: "https://github.com/vigneshShivanoor/major_project",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600",
        badge:
          "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600",
        badge:
          "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      },
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900",
        text: "text-indigo-600",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900",
        text: "text-orange-600",
        badge:
          "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer group"
                onClick={() => handleProjectClick(project.githubUrl)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${colors.bg} p-3 rounded-lg`}>
                    <Code className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${colors.badge} text-xs rounded-full font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
