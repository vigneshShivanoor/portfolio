import React from "react";
import { Award } from "lucide-react";

const Certifications: React.FC = () => {
  const certifications = [
    "Full Stack Web Development",
    "Java Fundamentals - Oracle",
    "Industrial Project Based Learning - Data Science",
    "Certificate of Internship at ACCELQ",
    "Certificate of Web Development",
    "Certificate of Internship at BRAINOVISION",
    "3rd Prize in Capture The Flag (CTF) Event",
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition-colors duration-200">
                  <Award className="w-6 h-6 text-yellow-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {cert}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
