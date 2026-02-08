import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Link,
  Avatar,
  Button,
  Chip,
  Divider,
} from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Code2, Database, Globe, Smartphone, Terminal, Wrench, Monitor } from "lucide-react";

const skills = [
  {
    category: "Mobile Development",
    icon: <Smartphone size={16} />,
    items: ["Java", "Kotlin", "Flutter", "Swift"],
    color: "primary",
  },
  {
    category: "Web Frontend",
    icon: <Globe size={16} />,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS"],
    color: "secondary",
  },
  {
    category: "Desktop Development",
    icon: <Monitor size={16} />,
    items: ["JavaFX", "Electron.js", ".NET", "Python Tkinter"],
    color: "primary",
  },
  {
    category: "Backend",
    icon: <Code2 size={16} />,
    items: ["Node.js", "Express.js", "Appwrite", "Firebase"],
    color: "success",
  },
  {
    category: "Databases",
    icon: <Database size={16} />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "warning",
  },
  {
    category: "General Programming",
    icon: <Terminal size={16} />,
    items: ["Python", "C++"],
    color: "danger",
  },
  {
    category: "Tools & Others",
    icon: <Wrench size={16} />,
    items: ["Bash", "Git", "GitHub", "GitLab", "REST APIs", "JSON"],
    color: "default",
  },
];

const AboutSection = () => {
  return (
    <section className="download-section relative overflow-hidden">
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
      
      <div className="mx-auto px-6 py-24 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Profile Card */}
          <div className="md:col-span-1">
            <Card className="h-full bg-background/60 backdrop-blur-md border-small border-default-200/50 shadow-sm hover:shadow-md transition-shadow rounded-3xl">
              <CardBody className="flex flex-col items-center text-center gap-4 py-8">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
                    <Avatar 
                        src="dev.jpg" 
                        className="w-32 h-32 text-large relative bg-background" 
                        isBordered 
                        color="primary"
                    />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
                    Abdul Mueed
                  </h3>
                  <p className="text-default-500 font-bold mt-1">Software Engineer</p>
                </div>
                
                <p className="text-sm text-default-400 px-4">
                  Passionate about building high-quality mobile and web applications.
                </p>

                <div className="flex gap-4 mt-4">
                  <Button
                    href="https://github.com/am-abdulmueed"
                    as={Link}
                    isExternal
                    isIconOnly
                    variant="flat"
                    color="default"
                    aria-label="GitHub"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaGithub size={22} />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/abdulmueed/"
                    as={Link}
                    isExternal
                    isIconOnly
                    variant="flat"
                    color="default"
                    aria-label="LinkedIn"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaLinkedin size={22} />
                  </Button>
                  <Button
                    href="https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/"
                    as={Link}
                    isExternal
                    isIconOnly
                    variant="flat"
                    color="danger"
                    aria-label="Instagram"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaInstagram size={22} />
                  </Button>
                  <Button
                    href="https://x.com/a.b.d.u.l.m.u.e.e.d"
                    as={Link}
                    isExternal
                    isIconOnly
                    variant="flat"
                    color="default"
                    aria-label="X (Twitter)"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaXTwitter size={22} />
                  </Button>
                  <Button
                    href="mailto:am.abdulmueed3@gmail.com?subject=Inquiry%20from%20Muxio%20Website&body=Ref%3A%20https%3A%2F%2Fmuxioo.vercel.app%0A%0AName%3A%20%0APhone%20(Optional)%3A%20%0AMessage%3A%20"
                    as={Link}
                    isExternal
                    isIconOnly
                    variant="flat"
                    color="warning"
                    aria-label="Email"
                    className="hover:scale-110 transition-transform"
                  >
                    <FaEnvelope size={22} />
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Details Card */}
          <div className="md:col-span-2">
            <Card className="h-full bg-background/60 backdrop-blur-md border-small border-default-200/50 shadow-sm rounded-3xl">
              <CardHeader className="flex flex-col items-start px-6 pt-6 pb-0">
                <h4 className="text-xl font-bold text-foreground">About Me</h4>
              </CardHeader>
              <CardBody className="px-6 py-4 gap-6">
                <p className="text-default-500 leading-relaxed">
                  I am a student at <span className="font-semibold text-foreground">Virtual University, Pakistan</span> majoring in Software Engineering. 
                  With intermediate knowledge in <span className="text-gradientstart font-medium">Mobile App Development</span> (Android & iOS), <span className="text-gradientend font-medium">Web Development</span>, and <span className="text-primary font-medium">Desktop Development</span> (alpha), 
                  I am constantly learning and refining my skills to build high-performing applications across multiple platforms.
                </p>

                <Divider />

                <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-semibold text-foreground">Skills & Technologies</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-default-600">
                            {skillGroup.icon}
                            <span className="text-sm font-medium">{skillGroup.category}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {skillGroup.items.map((item, i) => (
                            <span 
                                key={i} 
                                className="text-sm text-default-500 font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
