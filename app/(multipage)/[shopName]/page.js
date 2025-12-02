import { getData } from "../../utils/api-helpers";
import Home from "../_component/Home";

const page = async ({ params }) => {
  const { shopName } = await params;
  const shopInfo = await getData(shopName);
  return (
    <>
      <Home shopName={shopName} shopInfo={shopInfo} />
    </>
  );
};

export default page;
