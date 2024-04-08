import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Awid</Subheading>}
        heading="Innovative AI solutions company."
        description="Our team combines advanced technology and expertise to provide state-of-the-art artificial intelligence products and services. With a deep understanding of AI technologies and their potential, we develop groundbreaking solutions that address complex challenges. Trust our AI company to provide you with pioneering advancements in the field and help drive your business forward."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to innovate with AI solutions."
        description="Our team of dedicated professionals is committed to pushing boundaries and creating intelligent systems that enhance productivity, efficiency, and overall performance. We believe that AI and robotics have the potential to revolutionize the way we work and live, and we are determined to be at the forefront of this transformative journey."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="We are on a mission to redefine what is possible by seamlessly integrating AI and robotics, creating intelligent systems that drive efficiency, productivity, and transformative growth."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:"We are here for you around the clock, ensuring prompt assistance and uninterrupted service whenever you need it."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:"Together, we achieve greatness through collaboration and shared expertise."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:"Our commitment to exceptional service and tailored solutions drives us to exceed expectations."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
