import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImageWithCenteredContent";
import Features from "components/cards/TabCardGrid.js";
import Footer from "components/footers/FiveColumnDark.js";
export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features service_id = {1}/>
    
    <Footer />
  </AnimationRevealPage>
);
