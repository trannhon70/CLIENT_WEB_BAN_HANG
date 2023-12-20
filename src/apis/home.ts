import { axiosInstanceNonAuth } from "./instance";

export const getBannerHome = () => axiosInstanceNonAuth.get("/others/banner");
