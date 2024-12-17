import React from "react";
import WhoWeAre from "../Components/AboutPageComponents/WhoWeAre/WhoWeAre";
import AboutWebCreations from "../Components/AboutPageComponents/AboutWebCreations/AboutWebCreations";
import Honors from "../Components/AboutPageComponents/Honors/Honors";

const AboutPage = () => {
  return (
    <div>
      <WhoWeAre />
      <AboutWebCreations/>
      <Honors/>
    </div>
  );
};

export default AboutPage;
