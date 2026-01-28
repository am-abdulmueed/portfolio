import React from "react";
import { 
  MdLibraryMusic, 
  MdLyrics, 
  MdFeaturedPlayList, 
  MdExplore, 
  MdInsights, 
  MdOfflinePin 
} from "react-icons/md";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const features = [
  {
    title: "Streaming Music",
    descriptions:
      "Play music from YouTube Music or YouTube free without ads in the background",
    image: MdLibraryMusic,
    color: "from-blue-500/20 to-blue-500/10 text-blue-500",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/50",
  },
  {
    title: "Browsing",
    descriptions:
      "Browsing Home, Charts, Podcast, Moods & Genre with YouTube Music data at high speed",
    image: MdExplore,
    color: "from-purple-500/20 to-purple-500/10 text-purple-500",
    iconColor: "text-purple-500",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    title: "Personalized",
    descriptions:
      "Analyze your playing data, create custom playlists, and sync with YouTube Music",
    image: MdInsights,
    color: "from-pink-500/20 to-pink-500/10 text-pink-500",
    iconColor: "text-pink-500",
    borderColor: "group-hover:border-pink-500/50",
  },
  {
    title: "Offline Playing",
    descriptions: "Caching and can save data for offline playback",
    image: MdOfflinePin,
    color: "from-green-500/20 to-green-500/10 text-green-500",
    iconColor: "text-green-500",
    borderColor: "group-hover:border-green-500/50",
  },
  {
    title: "Synced lyrics",
    descriptions:
      "Synced lyrics from Musixmatch and YouTube Transcript and translated lyrics from Musixmatch",
    image: MdLyrics,
    color: "from-yellow-500/20 to-yellow-500/10 text-yellow-500",
    iconColor: "text-yellow-500",
    borderColor: "group-hover:border-yellow-500/50",
  },
  {
    title: "Many more",
    descriptions:
      "Many more features like SponsorBlock, Sleep Timer, Android Auto, Video Option, etc",
    image: MdFeaturedPlayList,
    color: "from-red-500/20 to-red-500/10 text-red-500",
    iconColor: "text-red-500",
    borderColor: "group-hover:border-red-500/50",
  },
];

const FeatureSection = () => {
  return (
    <div className="py-20 px-6 relative">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

      <h1 className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl bg-clip-text py-10 text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            isBlurred
            className={`py-8 border-small border-default-200/50 bg-background/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out group ${feature.borderColor}`}
          >
            <CardHeader className="flex justify-center pb-6">
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} shadow-inner`}>
                <feature.image size={48} className={`drop-shadow-md ${feature.iconColor}`} />
              </div>
            </CardHeader>
            <CardBody className="text-center gap-3 px-8">
              <h1 className="text-2xl font-bold tracking-tight text-foreground group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gradientstart group-hover:to-gradientend transition-all duration-300">
                {feature.title}
              </h1>
              <p className="text-default-500 leading-relaxed font-medium">
                {feature.descriptions}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
