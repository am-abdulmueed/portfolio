"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Instagram,
  Mail,
  Linkedin,
  Heart,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

// Animated border class (assuming it exists in Header)
const animatedBorderClass =
  "relative hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 hover:after:w-full after:transition-all after:duration-300";

export default function Footer({ isHomePage = true }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("am.abdulmueed3@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const contactMethods = [
    {
      id: "email",
      title: "Email",
      subtitle: "am.abdulmueed3@gmail.com",
      description: "Perfect for detailed project discussions",
      icon: Mail,
      href: "mailto:am.abdulmueed3@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400",
      hasExternalLink: true,
      hasCopy: true,
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "@a.b.d.u.l.m.u.e.e.d",
      description: "Quick messages and behind-the-scenes",
      icon: Instagram,
      href: "https://instagram.com/a.b.d.u.l.m.u.e.e.d",
      color: "from-pink-500 to-purple-500",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
      iconBg: "bg-gradient-to-r from-pink-500 to-purple-500 text-white",
      hasExternalLink: true,
      hasCopy: false,
    },
  ];

  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/am-abdulmueed",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      href: "mailto:am.abdulmueed@gmail.com",
      icon: Mail,
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/am-abdulmueed",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 relative overflow-hidden">
      {/* Background Elements - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-100 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main Content Section */}
      {isHomePage && (
        <div className="relative z-10 py-8 sm:py-12 lg:py-16">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Profile Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow blur-md opacity-50"></div>
                  <div className="relative z-10 w-full h-full rounded-full bg-white dark:bg-gray-800 p-1">
                    <img
                      src="./abdul.webp"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      Available for work
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date().toLocaleString("en-IN", {
                      timeZone: "Asia/Karachi",
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZoneName: "short",
                    })}
                  </p>
                </div>
              </div>

              {/* Main Heading - Mobile Optimized */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                  Let's talk about a
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  project
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 animate-bounce flex-shrink-0" />
                </span>
              </h1>

              {/* Description - Mobile Optimized */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Ready to bring your ideas to life? Whether it's a collaboration,
                a new project, or just a creative idea you want to explore, I'm
                here to help make it happen.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-end">
              <button
                onClick={() => setShowContactDialog(true)}
                className="relative flex items-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-medium">Get in touch</span>
                <MessageCircle className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Dialog - Mobile Optimized */}
      {showContactDialog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setShowContactDialog(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dialog Header */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 sm:p-6 text-white">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold">
                    Let's connect
                    <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </h2>
                  <button
                    onClick={() => setShowContactDialog(false)}
                    className="text-white/80 hover:text-white text-2xl leading-none p-1 hover:bg-white/10 rounded-full transition-colors"
                  >
                    ×
                  </button>
                </div>
                <p className="text-blue-100 text-sm sm:text-base">
                  Ready to bring your vision to life? Choose your preferred way
                  to reach out.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.id}
                    className={`group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 ${method.bgColor} transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 active:scale-98`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${method.iconBg} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            {method.title}
                          </h3>
                          {method.hasExternalLink && (
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                          )}
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1 break-all">
                          {method.subtitle}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                          {method.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <a
                          href={method.href}
                          target={method.hasExternalLink ? "_blank" : undefined}
                          rel={
                            method.hasExternalLink
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors active:scale-95"
                        >
                          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300" />
                        </a>

                        {method.hasCopy && (
                          <button
                            onClick={handleCopyEmail}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors active:scale-95"
                          >
                            {copiedEmail ? (
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                            ) : (
                              <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dialog Footer */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl text-center">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                  ⚡ Usually respond within 24 hours
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Available now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Section - Social Links & Copyright */}
      <div className="relative z-10 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between md:items-center">
          {/* Social Links - Mobile Grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 lg:gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center sm:justify-start gap-2 px-3 py-2 sm:px-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 active:scale-95 ${link.color}`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-1 sm:gap-2">
              <span className="flex items-center gap-1 sm:gap-2">
                © {new Date().getFullYear()} All rights reserved. Crafted with
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                by
              </span>
              <a
                href="https://github.com/am-abdulmueed"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <strong>Abdul Mueed</strong>
              </a>
            </p>
            <div className="mt-2 flex items-center justify-center md:justify-end gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}