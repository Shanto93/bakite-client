import Banner from "@/components/modules/HomePage/Banner";
import { Contact } from "@/components/modules/HomePage/Contact";
import FaqSection from "@/components/modules/HomePage/FaqSection";
import OurSuccess from "@/components/modules/HomePage/OurSuccess";
import ShopDetails from "@/components/modules/HomePage/ShopDetails";
import WhatOurCustomerSay from "@/components/modules/HomePage/WhatOurCustomerSay";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopDetails></ShopDetails>
      <OurSuccess></OurSuccess>
      <WhatOurCustomerSay></WhatOurCustomerSay>
      <Contact></Contact>
      <FaqSection></FaqSection>
    </div>
  );
};

export default HomePage;
