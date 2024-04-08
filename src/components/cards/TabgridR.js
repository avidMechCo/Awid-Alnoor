import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
// import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
//import { ReactComponent as StarIcon } from "images/star-icon.svg";
//import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
//import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { getCategoryByServiceId } from "../../services/apiService";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12 justify-center whitespace-normal`;

const CardContainer = tw.div`mt-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12 flex justify-center max-w-full whitespace-pre-line`;
const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

// const SvgDotPattern1 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern2 = tw(
//   SvgDotPatternIcon
// )`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern3 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
// const SvgDotPattern4 = tw(
//   SvgDotPatternIcon
// )`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;


const topicNames = ["Autonomous", "Arm Robot", "Medical Robots"];



export default ({
  service_id,
  heading = "services",
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabs = {
    [topicNames[0]]: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
        subtitle: "Paid",
        title: "Loachella, NYC",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com"
      }
    ],
    [topicNames[1]]: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
        subtitle: "Paid",
        title: "Loachella, NYC",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com"
      }],
    [topicNames[2]]: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
        subtitle: "Paid",
        title: "Loachella, NYC",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        url: "https://timerse.com"
      }]
  }

  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: Services } = await getCategoryByServiceId(service_id);
        setCategory(Services);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  console.log(category)
  return (
    <Container>

      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (

              <CardContainer key={index}>
                
                <HeadingInfoContainer>
                  <HeadingTitle>Automatic perfume dispenser</HeadingTitle>
                  <HeadingDescription>
                  Dispenser efficiently Delivers fragrances with precision and convenience, enhancing any environment with a touch of elegance and freshness.
                  </HeadingDescription>
                </HeadingInfoContainer>
                
                  <Card key={index} reversed={index % 2 === 1}>
                    <Image imageSrc={card.imageSrc} />
                    <Details>
                      <Subtitle>{card.subtitle}</Subtitle>
                      <Title>{card.title}</Title>
                      <Description>{card.description}</Description>
                      <Link href={card.url}>See Event Details</Link>
                    </Details>
                  </Card>
             
              </CardContainer>
              //                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
              //                  <CardImageContainer imageSrc={card.imageSrc}>
              //                    <CardRelatedContainer>
              //                      <CardRelated>
              //                        <StarIcon />
              //                        {card.related}
              //                      </CardRelated>
              //                      <CardReview>({card.reviews})</CardReview>
              //                    </CardRelatedContainer>
              //                    <CardHoverOverlay
              //                      variants={{
              //                        hover: {
              //                          opacity: 1,
              //                          height: "auto"
              //                        },
              //                        rest: {
              //                          opacity: 0,
              //                          height: 0
              //                        }
              //                      }}
              //                      transition={{ duration: 0.3 }}
              //                    >
              //                      <CardButton>Show More</CardButton>
              //                    </CardHoverOverlay>
              //                  </CardImageContainer>
              //                  <CardText>
              //                    <CardTitle>{card.title}</CardTitle>
              //                    <CardContent>{card.content}</CardContent>
              //                  </CardText>
              //                </Card>


            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      {/* <DecoratorBlob1 /> */}
      {/* <DecoratorBlob2 /> */}
    </Container>
  );
};


