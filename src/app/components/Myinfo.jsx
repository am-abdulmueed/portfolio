import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Instagram, 
  Mail, 
  MailPlus, 
  MessageCircle, 
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";

function ContactDialog() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('am.abdulmueed3@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      subtitle: 'am.abdulmueed3@gmail.com',
      description: 'Perfect for detailed project discussions',
      icon: Mail,
      href: 'mailto:am.abdulmueed3@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'hover:bg-blue-50',
      iconBg: 'bg-blue-100 text-blue-600',
      hasExternalLink: true,
      hasCopy: true
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: '@a.b.d.u.l.m.u.e.e.d',
      description: 'Quick messages and behind-the-scenes',
      icon: Instagram,
      href: 'https://instagram.com/a.b.d.u.l.m.u.e.e.d',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'hover:bg-pink-50',
      iconBg: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white',
      hasExternalLink: true,
      hasCopy: false
    }
  ];

  return (
    <div className="w-full flex justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative group w-full max-w-xs sm:max-w-sm">
            <Button 
              className="relative flex items-center justify-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-6 text-sm sm:text-base bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full font-medium overflow-hidden group"
              onClick={() => setIsOpen(true)}
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              
              <span className="relative z-10">Get in touch</span>
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </DialogTrigger>
        
        <DialogContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-3xl border-0 shadow-2xl max-w-sm sm:max-w-md mx-auto p-0 overflow-hidden m-4">
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 sm:p-6 text-white">
            <div className="absolute inset-0 bg-black/10"></div>
            <DialogHeader className="relative z-10">
              <DialogTitle className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
                Let's connect
                <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-sm sm:text-base mt-2">
                Ready to bring your vision to life? Choose your preferred way to reach out.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={method.id}
                  className={`group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 ${method.bgColor} dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${method.iconBg} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
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

                    <div className="flex flex-col gap-1 sm:gap-2">
                      <a
                        href={method.href}
                        target={method.hasExternalLink ? "_blank" : undefined}
                        rel={method.hasExternalLink ? "noopener noreferrer" : undefined}
                        className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300" />
                      </a>
                      
                      {method.hasCopy && (
                        <button
                          onClick={handleCopyEmail}
                          className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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

          <div className="px-4 pb-4 sm:px-6 sm:pb-6">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactDialog;