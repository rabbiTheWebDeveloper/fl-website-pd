import { headers } from "next/headers";
import { getData } from "../utils/api-helpers";
import HomeComp from "./_component/HomeComp";
export const metadata = {
  title: "Funnel Liner - Automated Sales Funnel",
  description: "Funnel Liner - Automated Sales Funnel",
  icons: {
    icon: "/images/favicon.png",
  },
  viewport: "width=device-width, user-scalable=no",
  other: {
    "facebook-domain-verification": "o2jyunge4d5l7n767p8yf4qkuz9j4b",
  },
};

const page = async () => {
  const headerList = await headers();
  const host = headerList.get("host");
  const cleanDomain = host.replace(/^www\./, "");
  const data = await getData(cleanDomain);
  console.log("hello ", data);
  return (
    <>
      <HomeComp domainInfo={data} />
    </>
  );
};

export default page;
