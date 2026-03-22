import MusicPlayer from '@/components/custom/MusicPlayer';
import { Suspense } from 'react';

export const metadata = {
  title: 'Watch Song - Muxio',
  description: 'Listen to your favorite songs on Muxio or open in the official app.',
};

function WatchContent({ searchParams }) {
  const videoId = searchParams.v;

  if (!videoId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-2xl font-bold text-red-500">No Video ID provided</h1>
        <p className="text-muted-foreground">Please provide a valid video ID in the URL.</p>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-12 flex flex-col items-center gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Now Playing
        </h1>
        <p className="text-muted-foreground max-w-[600px]">
          Opening in your app... If not installed, you can listen here or download the app.
        </p>
      </div>

      <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`simpmusic://app/watch?v=${videoId}`}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25"
        >
          Open in App
        </a>
        <a
          href="/download"
          className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/80 transition-colors"
        >
          Download App
        </a>
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-md text-center">
        <p className="text-sm text-muted-foreground italic">
          Tip: You can set Muxio as your default music player in Android settings for a seamless experience.
        </p>
      </div>
    </div>
  );
}

export default function WatchPage({ searchParams }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <WatchContent searchParams={searchParams} />
    </Suspense>
  );
}
