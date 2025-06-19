import React from "react";
import { GraduationCap } from "lucide-react";

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (Computer Science & Engineering)",
      institution: "Geethanjali College of Engineering & Technology",
      period: "2021 - 2025",
      grade: "CGPA: 8.54 (Pursuing 7th semester)",
      color: "blue",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      period: "2019 - 2021",
      grade: "Percentage: 93.20%",
      color: "green",
    },
    {
      degree: "High School",
      institution: "St. Anthony Grammar High School",
      period: "2009 - 2019",
      grade: "Percentage: 92% (9.2 CGPA)",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600",
        darkText: "text-blue-400",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600",
        darkText: "text-green-400",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600",
        darkText: "text-purple-400",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const colors = getColorClasses(edu.color);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${colors.bg} p-3 rounded-lg`}>
                    <GraduationCap className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p
                      className={`${colors.text} dark:${colors.darkText} font-semibold`}
                    >
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.period} | {edu.grade}
                    </p>
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

export default Education;
