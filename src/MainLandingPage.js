import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
//import FAQ from "components/faqs/SimpleWithSideImage.js";
//import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/FiveColumnDark.js";
//import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import fr from "images/hosh.jpg"
import pic from "images/12.jpg"

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Portfolio />
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our professionals."
      testimonials={[
        {
          imageSrc:
          fr,
          profileImageSrc:
            "https://avatar.iran.liara.run/public/59",
          quote:
            "AwidAlnoor was very good and efficient. They were patient when it came to receiving information from me but very diligent when it came to giving information, the best of both worlds. He a brilliant create of product and i will definitely work with him again. I use freelancer all the time and it was hard to find some with this quality of work especially when it comes to mechanical design.",
          customerName: "Burrell w.",
          customerTitle: "Design New Product for a Bath tub."
        },
        {
          imageSrc: pic,
          profileImageSrc:
            "https://avatar.iran.liara.run/public/16",
          quote:
          "AwidAlnoor's strengths are in concepts of machine learning, as well as in implementation of advanced machine learning. He is very knowledgeable, also an engineer and hence can make practical sense things. It has been 17 months since we have been collaborating. The solutions work, always!",
          customerName: "Mujtaba A.",
          customerTitle: "Consultant on AI project"
        }
      ]}
      textOnLeft={true}
    />
    {/*<FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    />*/}

    <Blog />
    <Footer />
  </AnimationRevealPage>
);
