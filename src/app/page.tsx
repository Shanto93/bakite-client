import Banner from "@/components/modules/HomePage/Banner";
import { Contact } from "@/components/modules/HomePage/Contact";
import FaqSection from "@/components/modules/HomePage/FaqSection";
import OurPartners from "@/components/modules/HomePage/OurPartners";
import OurSuccess from "@/components/modules/HomePage/OurSuccess";
import ShopDetails from "@/components/modules/HomePage/ShopDetails";
import { TeamSection } from "@/components/modules/HomePage/TeamSection";
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
      <TeamSection></TeamSection>
      <OurPartners></OurPartners>
    </div>
  );
};

export default HomePage;
