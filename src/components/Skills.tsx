import React from "react";

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C++", "C", "JavaScript", "TypeScript"],
      color: "blue",
      gradient: "from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700",
    },
    {
      category: "Web Technologies",
      skills: [
        "HTML",
        "CSS",
        "ReactJS",
        "NodeJS",
        "Spring Framework",
        "Angular",
        "Flask",
        "PHP",
      ],
      color: "green",
      gradient: "from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700",
    },
    {
      category: "Tools & Databases",
      skills: [
        "MySQL",
        "NoSQL",
        "VS Code",
        "Jupyter Notebook",
        "Azure Microsoft",
        "AWS Services",
      ],
      color: "purple",
      gradient: "from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <div
                      className={`w-2 h-2 ${getColorClasses(
                        category.color
                      )} rounded-full group-hover:scale-150 transition-transform duration-200`}
                    ></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
