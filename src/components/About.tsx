import React from "react";
import { User, MapPin, Phone, Mail, Linkedin } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <User className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Career Objective
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Aspiring Software Developer with a strong foundation in both
                front-end and back-end development. Eager to leverage my skills
                in Java, Python, ReactJS, and Spring Framework to build
                efficient, scalable, and user-friendly applications. Seeking a
                challenging role at a forward-thinking company to contribute to
                innovative projects and grow professionally.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <MapPin className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Location
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Hyderabad, Telangana
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <Phone className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Phone
              </h4>
              <p className="text-gray-600 dark:text-gray-300">+91 7738363524</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <Mail className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Email
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                vigneshshivanoor@gmail.com
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <Linkedin className="w-8 h-8 text-blue-700 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/shivanoor-vignesh-541085270/"
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
