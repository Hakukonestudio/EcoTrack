// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Soovitatav, et tuvastada potentsiaalsed probleemid
    swcMinify: true, // SWC minifitseerimise lubamine
    // experimental: {
    //   serverActions: true, // See rida on nüüd eemaldatud
    // },
    // Teised konfiguratsioonivalikud, mida võite vajada
  };
  
  export default nextConfig;