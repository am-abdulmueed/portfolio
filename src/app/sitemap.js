import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";

const baseUrl = "https://muxioo.vercel.app";
const baseDir = "src/app";
const excludeDirs = ["api", "fonts"];

export const revalidate = 3600; // revalidate at most every hour

async function getRoutes() {
  const fullPath = path.join(process.cwd(), baseDir);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  let routes = ["/"];

  entries.forEach((entry) => {
    if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
      routes.push(`/${entry.name}`);
    }
  });

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));
}

export default function sitemap() {
  return getRoutes();
}
