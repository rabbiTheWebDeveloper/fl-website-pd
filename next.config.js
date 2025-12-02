/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://web.funnelliner.com/api/v1",
    TRACKING_URL: "https://web.funnelliner.com/order-tracker/",
    API_URL_DASHBOARD:"https://funnelliner-lead-page-server.vercel.app/api/v1"
  },
  
};

module.exports = nextConfig;
