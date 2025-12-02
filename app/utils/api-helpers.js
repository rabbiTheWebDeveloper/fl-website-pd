import { API_ENDPOINTS } from "../../config/ApiEndpoints";

export const getData = async (shopName) => {
  const url = new URL(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.INFO}`);
  const domainRes = await fetch(url, {
    headers: { "domain": shopName },
    cache: "no-store",
  });

  if (!domainRes.ok) throw new Error("Failed to fetch domain info");
  const { data: domainInfo } = await domainRes.json();
  const [sliderRes, bannerRes] = await Promise.all([
    fetch(`${API_ENDPOINTS.BASE_URL}/shops/content?type=slider`, {
      headers: { "shop-id": domainInfo?.shop_id },
      cache: "no-store",
    }),
    fetch(`${API_ENDPOINTS.BASE_URL}/shops/content?type=banner`, {
      headers: { "shop-id": domainInfo?.shop_id },
      cache: "no-store",
    }),
  ]);
  const [sliderData, bannerData] = await Promise.all([
    sliderRes.json(),
    bannerRes.json(),
  ]);
  return {
    ...domainInfo,
    slider: sliderData?.data || [],
    banner: bannerData?.data || [],
  };
};

export const getOtherData = async (shopName, typeOfPage) => {
  const startTime = performance.now();
  const response = await fetch(
    `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.INFO}`,
    {
      headers: {
        domain: shopName,
      },
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error(`[${host}]: failed to fetch ${host}`);
  }
  const data = await response.json();
  const domainInfo = data.data;
  const toc = await fetch(
    `${API_ENDPOINTS.BASE_URL}/shops/content?type=${typeOfPage}`,
    {
      headers: {
        "shop-id": domainInfo?.shop_id,
      },
      cache: "no-store",
    }
  );
  const endTime = performance.now();
  const duration = (endTime - startTime).toFixed(2);
  const tocData = await toc.json();
  const tocDataInfo = tocData.data;
  return {
    ...domainInfo,
    about_us: tocDataInfo || "",
    privacy_policy: tocDataInfo || "",
    tos: tocDataInfo || "",
  };
};
