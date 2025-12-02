import { headers } from "next/headers";
import { getData } from "../utils/api-helpers";
import HomeComp from "./_component/HomeComp";

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
