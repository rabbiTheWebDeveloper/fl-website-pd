import { getData } from "../../utils/api-helpers";
import Home from "../_component/Home";

const page = async ({ params }) => {
 const { shopName } = params;
  const shopInfo = await getData(shopName);
  if (!shopInfo) {
    return <div>Shop not found</div>;
  }

  return <Home shopName={shopName} shopInfo={shopInfo} />;
};

export default page;
