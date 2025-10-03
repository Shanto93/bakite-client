import Banner from "@/components/modules/HomePage/Banner";
import OurSuccess from "@/components/modules/HomePage/OurSuccess";
import ShopDetails from "@/components/modules/HomePage/ShopDetails";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopDetails></ShopDetails>
      <OurSuccess></OurSuccess>
    </div>
  );
};

export default HomePage;
