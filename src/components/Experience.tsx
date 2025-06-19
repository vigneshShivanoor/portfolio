import React from "react";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: "Software Tester (Intern)",
      company: "ACCELQ",
      location: "Hyderabad, Telangana",
      period: "May 2023 - June 2023",
      description:
        "Gained hands-on experience in software testing methodologies and quality assurance processes.",
      color: "blue",
    },
    {
      title: "Internship Trainee",
      company: "BRAINOVISION SOLUTIONS INDIA PVT.LTD",
      location: "Hyderabad, Telangana",
      period: "March 2023 - May 2023",
      description:
        "Completed comprehensive course in Full Stack Web Development using Java, gaining practical experience in end-to-end application development.",
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600",
        darkText: "text-blue-400",
        gradient:
          "from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600",
        darkText: "text-green-400",
        gradient:
          "from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.gradient} p-8 rounded-2xl shadow-lg`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${colors.bg} p-3 rounded-lg`}>
                    <Briefcase className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p
                      className={`${colors.text} dark:${colors.darkText} font-semibold`}
                    >
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {exp.period} | {exp.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
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

export default Experience;
