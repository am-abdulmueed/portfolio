import React from "react";
import {
  Card,
  CardBody,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/am-abdulmueed",
      color: "default",
      variant: "flat",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/abdulmueed/",
      color: "primary",
      variant: "flat",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/",
      color: "danger",
      variant: "flat",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter size={24} />,
      url: "https://x.com/a.b.d.u.l.m.u.e.e.d",
      color: "default",
      variant: "flat",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:am.abdulmueed3@gmail.com",
      color: "default",
      variant: "flat",
    },
  ];

  return (
    <section className="contact-section relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center justify-center py-10">
      {/* Background Effects */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80e6ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="mx-auto px-4 max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-default-500 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <Button
                href="https://cal.com/am-abdulmueed.vercel.app/30min?duration=5&layout=mobile"
                as={Link}
                isExternal
                size="lg"
                color="secondary"
                variant="shadow"
                className="w-full md:w-auto font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform"
                endContent={<FaArrowRight />}
                startContent={<FaCalendarAlt />}
              >
                Book a 30min Call
              </Button>
              <p className="text-sm text-default-400">
                Directly schedule a time that works for you.
              </p>
            </div>
          </div>

          {/* Right Column: Social Grid */}
          <Card className="bg-background/40 backdrop-blur-xl border-small border-default-200/50 shadow-2xl rounded-3xl overflow-visible">
            <CardBody className="p-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-1 rounded-full bg-gradient-to-b from-primary to-secondary"></div>
                    <h3 className="text-xl font-semibold">Social Platforms</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      href={link.url}
                      as={Link}
                      isExternal
                      variant="ghost"
                      color={link.color}
                      className={`h-14 justify-start px-4 border-default-200/50 hover:border-${link.color}/50 hover:bg-${link.color}/10 transition-all duration-300 group ${index === socialLinks.length - 1 ? "col-span-2 justify-center" : ""}`}
                      startContent={
                        <span className={`text-${link.color} group-hover:scale-110 transition-transform`}>
                            {link.icon}
                        </span>
                      }
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </Button>
                  ))}
                </div>
                
                <Divider className="my-2" />
                
                <div className="rounded-2xl bg-default-100/50 p-4 border border-default-200/50">
                    <p className="text-center text-sm text-default-500">
                        Prefer email? Reach out at <br/>
                        <Link href="mailto:am.abdulmueed3@gmail.com" className="text-primary font-semibold hover:underline">
                            am.abdulmueed3@gmail.com
                        </Link>
                    </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
