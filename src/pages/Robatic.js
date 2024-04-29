import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/headers/light2.js";
import Features from "components/features/VerticalWithAlternateImageAndText";
import Footer from "components/footers/FiveColumnDark.js";
export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features/>
    
    <Footer />
  </AnimationRevealPage>
);
