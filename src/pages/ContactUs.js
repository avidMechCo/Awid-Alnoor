import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        // cards={[
        //   {
        //     title: "Dubaie",
        //     description: (
        //       <>
        //         <Address>
        //           <AddressLine>Alkhabeesi</AddressLine>
        //           <AddressLine>Albahar building, flat number 549</AddressLine>
        //         </Address>
        //         <Email>awidalnoor@gmail.com</Email>
        //         <Phone>+97 (152) (442)-7403</Phone>
        //       </>
        //     )
        //   },
        //   {
        //     title: "Illinois",
        //     description: (
        //       <>
        //         <Address>
        //           <AddressLine>602 Annadale Drive</AddressLine>
        //           <AddressLine>Dekalb, IL 60115</AddressLine>
        //         </Address>
        //         <Email>contact@treact.com</Email>
        //         <Phone>+1 (203) 991-6988</Phone>
        //       </>
        //     )
        //   },
        //   {
        //     title: "Ohio",
        //     description: (
        //       <>
        //         <Address>
        //           <AddressLine>7713 Snake Hill Ave.</AddressLine>
        //           <AddressLine>Piqua, OH 45356</AddressLine>
        //         </Address>
        //         <Email>contact@treact.com</Email>
        //         <Phone>+1 (203) 991-6988</Phone>
        //       </>
        //     )
        //   }
        // ]}
        cards={[
          {
            title: "Dubaie",
            description: (
              <>
                <Address>
                  <AddressLine>Alkhabeesi</AddressLine>
                  <AddressLine>Albahar building, flat number 549</AddressLine>
                </Address>
                <Email>awidalnoor@gmail.com</Email>
                <Phone>+97 (152) (442)-7403</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
