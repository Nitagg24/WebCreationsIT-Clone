import React from "react";
import HeroSection from "../Components/HomepageComponents/heroSection/heroSection";
import CompaniesWeWorkWith from "../Components/HomepageComponents/CompaniesWeWorkWith/CompaniesWeWorkWith";
import AboutUs from "../Components/HomepageComponents/AboutUs/AboutUs";
import WhatWeCanDo from "../Components/HomepageComponents/WhatWeCanDo/WhatWeCanDo";
import Testimonials from "../Components/HomepageComponents/Testimonials/Testimonials";
import Blog from "../Components/HomepageComponents/Blog/Blog";
import GetInTouch from "../Components/HomepageComponents/GetInTouch/GetInTouch";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <CompaniesWeWorkWith />
      <AboutUs />
      <WhatWeCanDo />
      <Testimonials />
      <Blog />
      <GetInTouch />
    </div>
  );
};

export default Homepage;
