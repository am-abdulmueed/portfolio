"use client";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import NextLink from "next/link";

const communities = [
  {
    title: "Discord",
    description: "Join our Discord server to get in touch with the community.",
    thumbnail:
      "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg",
    url: "https://discord.gg/Rq5tWVM9Hg",
  },
  {
    title: "GitHub",
    description: "Contribute to the project on GitHub or create an issue.",
    icon: <FaGithub size={40} className="text-foreground" />,
    url: "https://github.com/maxrave-dev/SimpMusic",
  },
  {
    title: "Crowdin",
    description: "Help us translate the app into your language.",
    thumbnail:
      "https://support.crowdin.com/assets/logos/symbol/svg/crowdin-symbol-cDark.svg",
    url: "https://crowdin.com/project/muxio",
  },
];
const Footer = () => {
  return (
    <div className="relative isolate px-6 py-28 lg:px-8">
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[50%] aspect-[3/1] w-full -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-gradientstart/60 to-gradientend/60 opacity-30"
          style={{
            clipPath:
              "polygon(45% 55%, 61% 46%, 69% 55%, 78% 66%, 61% 81%, 35% 82%, 20% 75%, 24% 49%)",
          }}
        ></div>
      </div>
      <div className="py-20">
        <h2 className="scroll-m-20 text-center text-4xl font-bold tracking-tight lg:text-5xl pb-4 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
          Community
        </h2>
        <h4 className="scroll-m-20 text-xl text-center font-medium tracking-tight text-default-500">
          Get involved in our community. Everyone is welcome!
        </h4>
      </div>
      <div className="mx-21 my-10 flex flex-wrap justify-center justify-items-center gap-12">
        {communities.map((item, key) => (
          <Card
            key={key}
            isBlurred
            isPressable
            onPress={() => window.open(item.url, "_blank")}
            className="text-center shrink py-7 px-10 border-small border-default-200/50 bg-background/60 backdrop-blur-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out w-96"
          >
            <CardHeader className="flex gap-3">
              {item.icon ? (
                item.icon
              ) : (
                <Image
                  alt="logo"
                  height={40}
                  radius="sm"
                  src={item.thumbnail}
                  width={40}
                />
              )}
              <div className="flex flex-col">
                <h3 className="text-center text-xl font-bold tracking-tight lg:text-2xl bg-clip-text py-2 text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
                  {item.title}
                </h3>
              </div>
            </CardHeader>
            <CardBody>
              <h3 className="text-md text-default-500">{item.description}</h3>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="pt-20 grid grid-cols-1 justify-items-center gap-2">
        <p className="text-center text-default-500 text-md">
          © 2026 muxio - @am-abdulmueed
        </p>
        <div className="flex gap-4 items-center">
          <NextLink href="/privacy-policy" passHref>
            <span className="text-center text-default-500 text-md hover:text-foreground cursor-pointer transition-colors">
              Privacy Policy
            </span>
          </NextLink>
          <Link
            className="text-center text-default-500 text-md hover:text-foreground transition-colors"
            isExternal
            showAnchorIcon
            href="https://nextjs.org/"
          >
            Built with Next.js
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
