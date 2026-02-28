"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Link,
  Button,
  Input,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaCalendarAlt
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Send, Globe, MapPin, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/am-abdulmueed", color: "hover:text-white" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abdulmueed/", color: "hover:text-blue-500" },
    { name: "Twitter", icon: <FaXTwitter />, url: "https://x.com/a.b.d.u.l.m.u.e.e.d", color: "hover:text-sky-400" },
    { name: "Discord", icon: <FaDiscord />, url: "https://discord.com/users/am_abdulmueed", color: "hover:text-indigo-400" },
  ];

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format";
    }

    if (!formData.message.trim()) newErrors.message = "Message field cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate a cinematic delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset submission state after 5 seconds to allow new messages
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <section className="relative min-h-screen py-32 overflow-hidden flex items-center bg-background">
      {/* Dynamic Cinematic Background */}
      <div className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-40 animate-pulse -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[160px] opacity-40 animate-pulse delay-1000 -z-10" />
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02] -z-20 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* Left Side: Strategic Info (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/10 backdrop-blur-3xl"
              >
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Strategic Partnership</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground"
              >
                Let&apos;s Build <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary italic">Greatness.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-default-500 font-bold dark:font-medium text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0"
              >
                Transforming complex ideas into seamless digital realities. My inbox is always open for ambitious projects.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-md mx-auto lg:mx-0">
              {[
                { icon: <Mail className="text-primary" />, label: "Direct Email", value: "am.abdulmueed3@gmail.com", href: "mailto:am.abdulmueed3@gmail.com" },
                { icon: <Globe className="text-primary" />, label: "Availability", value: "Worldwide / Remote", href: "#" },
                { icon: <MapPin className="text-primary" />, label: "Location", value: "Pakistan (GMT+5)", href: "#" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-5 p-4 rounded-[2rem] bg-default-50/50 hover:bg-default-100 dark:bg-white/5 dark:hover:bg-white/10 border border-default-200 dark:border-white/10 transition-all duration-500 shadow-sm hover:shadow-md"
                >
                  <div className="w-14 h-14 min-w-[3.5rem] rounded-2xl bg-white dark:bg-white/5 border border-default-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-default-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors text-foreground break-all">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6">
              {socialLinks.map((social) => (
                <Tooltip key={social.name} content={social.name} placement="bottom" closeDelay={0}>
                  <Link
                    href={social.url}
                    isExternal
                    className={`text-2xl text-default-400 ${social.color} transition-all duration-300 hover:scale-125`}
                  >
                    {social.icon}
                  </Link>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Right Side: High-End Contact Form (7 cols) */}
          <div className="lg:col-span-7 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-1"
            >
              {/* Decorative border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-[3rem] -z-10 blur-sm" />

              <Card
                className="bg-content1/90 dark:bg-[#0a0a0a]/60 backdrop-blur-3xl border-default-200 dark:border-white/5 rounded-[2.9rem] p-4 md:p-10 shadow-2xl"
              >
                <CardBody className="p-0 overflow-visible">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 md:mb-12">
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">Initiate Project</h3>
                      <p className="text-default-400 font-bold uppercase text-[10px] tracking-[0.2em]">Response within 24 hours</p>
                    </div>
                    <Button
                      href="https://cal.com/am-abdulmueed.vercel.app/30min"
                      as={Link}
                      isExternal
                      variant="flat"
                      color="primary"
                      radius="full"
                      className="font-black uppercase text-[10px] h-10 md:h-12 px-6 tracking-widest bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-sm w-full sm:w-auto"
                      startContent={<FaCalendarAlt />}
                    >
                      Schedule Intro
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                      <div className="flex flex-col gap-3">
                        <label className={`${errors.name ? 'text-danger' : 'text-foreground'} font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] ml-1 transition-colors`}>FULL NAME</label>
                        <Input
                          placeholder="What's your name?"
                          variant="flat"
                          size="lg"
                          isRequired
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          isInvalid={!!errors.name}
                          errorMessage={errors.name}
                          classNames={{
                            base: "max-w-full",
                            inputWrapper: `h-14 md:h-16 rounded-2xl border-2 transition-all px-4 shadow-sm ${errors.name ? 'border-danger/50 dark:border-danger hover:border-danger focus-within:!border-danger' : 'border-default-200 dark:border-white/10 hover:border-primary focus-within:!border-primary'} bg-default-50 dark:bg-white/[0.04]`,
                            input: "bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none placeholder:text-default-400 placeholder:font-medium text-foreground font-semibold text-base",
                            errorMessage: "text-danger text-xs font-bold pt-1 uppercase tracking-wider",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className={`${errors.email ? 'text-danger' : 'text-foreground'} font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] ml-1 transition-colors`}>EMAIL ADDRESS</label>
                        <Input
                          placeholder="Where can I reach you?"
                          variant="flat"
                          size="lg"
                          isRequired
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          isInvalid={!!errors.email}
                          errorMessage={errors.email}
                          classNames={{
                            base: "max-w-full",
                            inputWrapper: `h-14 md:h-16 rounded-2xl border-2 transition-all px-4 shadow-sm ${errors.email ? 'border-danger/50 dark:border-danger hover:border-danger focus-within:!border-danger' : 'border-default-200 dark:border-white/10 hover:border-primary focus-within:!border-primary'} bg-default-50 dark:bg-white/[0.04]`,
                            input: "bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none placeholder:text-default-400 placeholder:font-medium text-foreground font-semibold text-base",
                            errorMessage: "text-danger text-xs font-bold pt-1 uppercase tracking-wider",
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-foreground font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] ml-1">PROJECT SUBJECT</label>
                      <Input
                        placeholder="e.g. Mobile App, Branding, SEO Strategy..."
                        variant="flat"
                        size="lg"
                        className="w-full"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        classNames={{
                          base: "max-w-full",
                          inputWrapper: "h-14 md:h-16 rounded-2xl border-2 border-default-200 dark:border-white/10 hover:border-primary focus-within:!border-primary bg-default-50 dark:bg-white/[0.04] transition-all px-4 shadow-sm",
                          input: "bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none placeholder:text-default-400 placeholder:font-medium text-foreground font-semibold text-base",
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-3 group/msg relative">
                      <label className={`${errors.message ? 'text-danger' : 'text-foreground'} font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] ml-1 transition-colors`}>STRATEGIC MESSAGE</label>
                      <div className="relative">
                        <Textarea
                          placeholder="Describe your vision or the problem we need to solve..."
                          variant="flat"
                          minRows={4}
                          className="w-full"
                          isRequired
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          isInvalid={!!errors.message}
                          errorMessage={errors.message}
                          classNames={{
                            base: "max-w-full",
                            inputWrapper: `min-h-[160px] rounded-[1.5rem] border-2 transition-all p-5 shadow-sm overflow-hidden ${errors.message ? 'border-danger/50 dark:border-danger hover:border-danger focus-within:!border-danger' : 'border-default-200 dark:border-white/10 hover:border-primary focus-within:!border-primary'} bg-default-50 dark:bg-white/[0.04]`,
                            input: "bg-transparent border-none outline-none focus:outline-none focus:ring-0 shadow-none placeholder:text-default-400 placeholder:font-medium text-foreground font-semibold text-base resize-none break-all whitespace-pre-wrap overflow-y-auto pr-8",
                            errorMessage: "text-danger text-xs font-bold pt-1 uppercase tracking-wider",
                          }}
                        />
                        {/* Custom visual expansion clue (non-functional browser handle replacement) */}
                        <div className="absolute bottom-4 right-4 text-foreground/40 pointer-events-none opacity-0 group-hover/msg:opacity-100 transition-opacity">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2L2 10M10 2H6M10 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-4">
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button
                          type="submit"
                          radius="full"
                          size="lg"
                          isLoading={isLoading}
                          className="w-full h-16 md:h-20 text-lg md:text-xl font-black uppercase tracking-[0.2em] shadow-2xl bg-foreground text-background hover:opacity-90 transition-all duration-300"
                          endContent={!isLoading && (isSubmitted ? <CheckCircle2 className="animate-in zoom-in duration-300" /> : <Send size={24} />)}
                          disabled={isLoading || isSubmitted}
                        >
                          {isLoading ? "Transmitting..." : isSubmitted ? "Mission Initiated" : "Send Transmission"}
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </motion.div>

            {/* Success Overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center z-20 rounded-[3rem] overflow-hidden bg-background/60"
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-default-50 dark:bg-[#111] border-2 border-default-200 dark:border-white/10 p-8 md:p-12 rounded-[2rem] text-center space-y-6 shadow-2xl mx-6 max-w-md w-full"
                  >
                    <div className="w-24 h-24 bg-foreground rounded-full mx-auto flex items-center justify-center shadow-xl">
                      <CheckCircle2 size={48} className="text-background" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black text-foreground uppercase tracking-[0.1em]">Message Received</h4>
                      <p className="text-default-500 font-medium">I&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
