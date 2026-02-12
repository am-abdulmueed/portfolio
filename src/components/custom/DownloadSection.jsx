import { Image, Link, Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from "react";
import Announcement from "./Announcement";
import { FaAndroid, FaWindows, FaApple, FaLinux, FaGooglePlay, FaAppStoreIos, FaMobileAlt, FaDesktop } from "react-icons/fa";
import RatingCard from "./RatingCard";

const mobilePlatforms = [
  {
    name: "Play Store",
    url: "https://play.google.com/store/apps/details?id=com.betapix.muxio",
    icon: <FaGooglePlay size={32} />,
    description: "Get it on Google Play",
    color: "bg-green-100 dark:bg-green-900/20",
  },
  {
    name: "App Store",
    url: "https://apps.apple.com/app/com.betapix.muxio",
    icon: <FaAppStoreIos size={32} />,
    description: "Download on the App Store",
    color: "bg-blue-100 dark:bg-blue-900/20",
  },
];

const desktopPlatforms = [
  {
    name: "Windows",
    icon: <FaWindows size={48} className="text-blue-500" />,
    url: "https://github.com/am-abdulmueed/muxio/releases",
    description: "Download .exe installer",
  },
  {
    name: "macOS",
    icon: <FaApple size={48} className="text-default-900 dark:text-white" />,
    url: "https://github.com/am-abdulmueed/muxio/releases",
    description: "Download .dmg image",
  },
  {
    name: "Linux",
    icon: <FaLinux size={48} className="text-yellow-600" />,
    url: "https://github.com/am-abdulmueed/muxio/releases",
    description: "Download AppImage / .deb",
  },
];

const DownloadSection = () => {
  return (
    <section className="download-section min-h-screen py-20 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.08), transparent 40%), radial-gradient(circle at 85% 70%, rgba(168,85,247,0.08), transparent 40%), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)" }}></div>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Announcement />
            <h2 className="mt-6 scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
              Get muxio now!
            </h2>
            <h4 className="mt-4 scroll-m-20 text-xl font-medium tracking-tight text-default-500 max-w-2xl mx-auto">
              Choose your platform and start streaming high-quality music for free.
            </h4>
            <div className="mt-6 flex justify-center">
              <RatingCard rating={4.8} users="20k+" />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Chip size="sm" variant="flat" color="success">Android</Chip>
              <Chip size="sm" variant="flat" color="warning">iOS</Chip>
              <Chip size="sm" variant="flat" color="primary">Windows</Chip>
              <Chip size="sm" variant="flat" color="default">macOS</Chip>
              <Chip size="sm" variant="flat" color="secondary">Linux</Chip>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mobile Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                  <FaMobileAlt size={32} />
                </div>
                <h3 className="text-3xl font-bold">Mobile</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mobilePlatforms.map((item, key) => (
                  <Card 
                    key={key} 
                    isPressable 
                    as={Link} 
                    href={item.url} 
                    isExternal
                    className="border-small border-default-200/50 bg-background/40 backdrop-blur-md hover:scale-[1.03] transition-transform rounded-3xl ring-1 ring-transparent hover:ring-primary/30"
                  >
                    <CardBody className="flex flex-row items-center gap-4 p-4">
                      <div className={`p-3 rounded-xl ${item.color} flex items-center justify-center w-16 h-16 shadow-inner`}>
                         {item.icon ? item.icon : <Image src={item.thumbnail} alt={item.name} width={40} height={40} className="object-contain" />}
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-bold text-lg">{item.name}</span>
                        <span className="text-xs text-default-500">{item.description}</span>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>

            {/* Desktop Section */}
            <div className="space-y-6">
               <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <FaDesktop size={32} />
                </div>
                <h3 className="text-3xl font-bold">Desktop</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {desktopPlatforms.map((platform, index) => (
                  <Card 
                    key={index}
                    isPressable
                    as={Link}
                    href={platform.url}
                    isExternal
                    className="border-small border-default-200/50 bg-background/40 backdrop-blur-md hover:scale-[1.03] transition-transform rounded-3xl ring-1 ring-transparent hover:ring-primary/30"
                  >
                     <CardBody className="flex flex-row items-center gap-6 p-6">
                        <div className="p-2">
                          {platform.icon}
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="font-bold text-2xl">{platform.name}</span>
                          <span className="text-medium text-default-500">{platform.description}</span>
                        </div>
                        <div className="ml-auto">
                          <Button color="primary" variant="shadow" radius="full" className="hover:scale-105">
                            Download
                          </Button>
                        </div>
                     </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-default-400">
              Requirements: Android 8.0+ | Windows 10/11 | macOS 11+ | Modern Linux Distros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
