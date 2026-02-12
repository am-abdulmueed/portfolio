#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Placeholder publisher ID since environment variable is removed
const publisherId = "ca-pub-2927681167600861";

// Create the content for ads.txt
let adsContent = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0`;
// Define the path to the ads.txt file
const adsFilePath = path.join(process.cwd(), "public", "ads.txt");

// Write the content to the ads.txt file
fs.writeFileSync(adsFilePath, adsContent);

console.log(`Successfully generated ads.txt with dummy publisher ID: ${publisherId}`);
