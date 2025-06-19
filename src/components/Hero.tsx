import React from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[url('/vi.jpeg')] bg-cover bg-center opacity-10 dark:opacity-5"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main Name with Slide Up Animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up-delayed">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient-text">
              Shivanoor Vignesh
            </span>
          </h1>

          {/* Role Titles with Staggered Animation */}
          <div className="space-y-2 animate-fade-in-stagger-1">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed animate-typewriter-1">
              Aspiring Software Developer
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed animate-typewriter-2">
              Full Stack Developer | Problem Solver
            </p>
          </div>

          {/* Description with Fade In */}
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-stagger-2">
            Building efficient, scalable, and user-friendly applications with
            expertise in
            <span className="text-blue-600 dark:text-blue-400 font-semibold animate-highlight">
              {" "}
              Java
            </span>
            ,
            <span className="text-green-600 dark:text-green-400 font-semibold animate-highlight-delayed-1">
              {" "}
              Python
            </span>
            ,
            <span className="text-purple-600 dark:text-purple-400 font-semibold animate-highlight-delayed-2">
              {" "}
              ReactJS
            </span>
            , and
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold animate-highlight-delayed-3">
              {" "}
              Spring Framework
            </span>
          </p>

          {/* Buttons with Bounce In */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in-delayed">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-subtle"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-6 h-6 text-gray-400 animate-float" />
      </div>
    </section>
  );
};

export default Hero;
