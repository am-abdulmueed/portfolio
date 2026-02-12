export const metadata = {
  title: "Muxio Music Nightly Download",
  description: "Download nightly builds of Muxio Music app.",
  alternates: {
    canonical: "/nightly-download",
  },
};

import NightlyDownloadClient from "./NightlyDownloadClient";

export default function NightlyDownload() {
  return <NightlyDownloadClient />;
}
