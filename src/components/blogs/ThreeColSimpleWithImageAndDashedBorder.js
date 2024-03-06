import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
//import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import pic1 from "images/gr11_lrg.jpg"
import pic2 from "images/pic2.png"
import pic3 from "images/pic3.png"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Articles",
  heading = <>We Love <span tw="text-primary-500">Writing.</span></>,
  description = "Our team has crafted several remarkable articles that highlight the expertise of our skilled professionals.",

}) => {
  const blogPosts = [
    {
      imageSrc:
      pic1 ,
      author: "Alireza Tavakolian et al.",
      title: "Fast COVID-19 versus H1N1 screening using optimized parallel inception",
      description: "COVID-19 and swine-origin influenza A (H1N1) are both pandemics that sparked significant concern worldwide. Since these two diseases have common symptoms, a fast COVID-19 versus H1N1 screening helps better manage patients at healthcare facilities. We present a novel deep model, called Optimized Parallel Inception, for fast screening of COVID-19.",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9119711/"
    },
    {
      imageSrc:
        pic3,
      author: "Alireza Tavakolian et al.",
      title: "Source code for optimized parallel inception: A fast COVID-19 screening software",
      description: "COVID-19 and swine-origin influenza A (H1N1) are both pandemics that sparked significant concern worldwide. These two viruses have the same symptoms and occur at a collision timeline. Optimized Parallel Inception (OPI) presents a new strategy to screen the COVID-19 from H1N1 with use of only symptoms.",
      url: "https://www.sciencedirect.com/science/article/pii/S2665963822000616"
    },
    {
      imageSrc:
      pic2,
      author: "Alireza Tavakolian et al.",
      title: "Hospital Readmission and Length of Stay Prediction Using an Optimized Hybrid Deep Model",
      description: "Hospital readmission and length-of-stay predictions provide information on how to manage hospital bed capacity and the number of required staff, especially during pandemics. We present a hybrid deep model called the Genetic Algorithm-Optimized Convolutional Neural Network (GAOCNN).",
      url: "https://www.mdpi.com/1999-5903/15/9/304"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
