export const getBaseUrl = () => {
  return process.env.API_URL_DASHBOARD || "https://funnelliner-lead-page-server.vercel.app/api/v1"
}