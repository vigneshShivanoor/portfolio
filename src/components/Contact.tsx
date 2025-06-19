import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vigneshshivanoor@gmail.com",
      href: "mailto:vigneshshivanoor@gmail.com",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7738363524",
      href: "tel:+917738363524",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      color: "purple",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shivanoor-vignesh-541085270/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/vigneshShivanoor",
      color: "bg-gray-800 hover:bg-gray-900",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600",
        hoverText: "hover:text-blue-700",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600",
        hoverText: "hover:text-green-700",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600",
        hoverText: "hover:text-purple-700",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((contact, index) => {
              const colors = getColorClasses(contact.color);
              const IconComponent = contact.icon;

              return (
                <div key={index} className="flex items-center space-x-4 group">
                  <div
                    className={`${colors.bg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {contact.title}
                    </h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className={`${colors.text} ${colors.hoverText} transition-colors duration-200`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Connect with me
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${link.color} text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
