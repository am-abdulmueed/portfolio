import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

const DescriptionSection = () => {
  return (
    <section className="description-section ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#80e6ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(65% 66%, 73% 77%, 84% 69%, 93% 80%, 88% 95%, 71% 97%, 57% 92%, 51% 81%, 54% 67%)",
            }}
          ></div>
        </div>
        <div className="mx-auto place-items-center py-14 sm:py-21 lg:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>
             <Image
                src="/mockup/description.png"
                alt="description"
                width={1200}
                height={1125}
                className="relative drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
              ></Image>
          </div>
          <div>
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl pb-8 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
              muxio
            </h2>
            <Card className="bg-background/40 backdrop-blur-md border-l-4 border-primary shadow-sm">
                <CardBody className="gap-4">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Simple yet powerful — feature-rich, ad-free, free to download, privacy‑first app.
                    </h4>
                    <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-default-500">
               Muxio brings music discovery inspired by YouTube Music & SoundCloud, with playback up to 256kbps audio or 1080p video. Personalize your experience with a sleek UI influenced by Spotify.
                    </h4>
                </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
