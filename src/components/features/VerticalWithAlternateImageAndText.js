import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import arm from "images/perfumm.jpg";
import pack from "images/pack.jpg";
import Urinanalysis from "images/Urinanalysis.jpg";
//import ResponsiveVideoEmbed from "helpers/ResponsiveVideoEmbed.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-md`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);


const StyledResponsiveVideoEmbed = styled.div`
  position: relative;
  padding-bottom: 0;
  height: 0;
  overflow: hidden;
  ${tw`rounded`}
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  ${tw`rounded bg-black shadow-xl`}
`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;



export default () => {
  const cards = [
    {
      videoSrc:
        "//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=1&responsive=1",
      subtitle: "Automatic",
      title: "Perfume dispenser",
      description: "Automatic rechargeable fragrance dispenser with a 12-volt lithium-ion battery brings you a delightful and amazing experience by blending three different fragrances. This intelligent device not only allows the diffusion of three different scents but also enables users to customize and personalize the ratio of each fragrance using the touch panel. With these intelligent features, the automatic rechargeable fragrance dispenser transforms every moment of your life into a unique and pleasant experience through the combination of distinct scents.",
      url: "https://timerse.com",
      movie_flag:true
    },

    {
      imageSrc: arm,
      subtitle: "Industrial arms",
      title: "FlexiArmTech",
      description:"Industrial Robotic Arms with Four Degrees of Freedom are considered one of the significant advancements in robotics and industrial automation. These arms, with their four degrees of freedom, have the capability to perform diverse and complex tasks in industrial environments. The degrees of freedom of these arms enable them to execute precise and agile movements and intelligently interact with different environments and tasks. This crucial feature allows them to operate automatically and with high precision in production lines, warehouses, and other industrial activities. One successful robotics project is the Avid Mech Industrial Robotic Arms. Industrial robotic arms with four degrees of freedom are typically equipped with sensors, advanced controls, and artificial intelligence technology to intelligently and adaptively adapt to the work environment and its various changes. These features make the industrial robotic arms with four degrees of freedom effective tools in increasing productivity and reducing errors in industrial processes.",
      url: "https://timerse.com",
      movie_flag: false
    },

    {
      imageSrc: pack,
      subtitle: "Industrial",
      title: "PackMaster Robotics",
      description:"Designing and manufacturing industrial robots and packaging machines is considered a significant innovation in the modern industry. These robots and machines, utilizing advanced technologies, provide increased productivity, reduced errors, and improved product quality. In the design of industrial robots, humans typically employ intelligent and programmable robots to carry out repetitive, hazardous, or error-prone tasks with high precision and speed. These robots can participate in various stages of production, transfer, or packaging of products. The fully automatic packaging machine is another project of Avid Mech. Packaging machines are also designed to optimize the packaging process and protect products against various damages. These machines, using sensors, intelligent controls, and user-friendly interfaces, enhance the packaging process and assist various industries, from food to pharmaceuticals. The use of these technologies not only improves the quality and safety of products but also results in time and cost savings. This contributes to enhancing the competitive capabilities of companies in global markets.",
      url: "https://timerse.com",
      movie_flag: false
    },
    {
      imageSrc: Urinanalysis,
      subtitle: "Urinanalysis",
      title: "UrinePro LabSampler",
      description:"In blood and urine laboratories, due to the high sensitivity of the results, there is a need for high precision in accurate sample collection, reduction of human errors, and increased speed of testing. For this purpose, the experts at Avid Mech have designed and built this fully automatic robot with three movable axes. The first axis is responsible for the longitudinal movement of the sample collector, the second axis moves the test tubes up and down the rack, and the third axis moves the axis of the syringe piston. The control system of this device has the capability to adjust for different sample collection volumes. Furthermore, the device can be adapted for use in other medical, chemical, and food laboratories.",
      url: "https://timerse.com",
      movie_flag: false
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Popular Events</HeadingTitle>
          <HeadingDescription>
          Our advanced robotics and automated systems revolutionize blood and urine analysis with precision, speed, and reduced human error. 
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              {card.movie_flag ? (
                <StyledResponsiveVideoEmbed url={card.videoSrc} >
                  <VideoIframe src={card.videoSrc} frameBorder="0" allowFullScreen></VideoIframe>

                </StyledResponsiveVideoEmbed>
                    ) : (
                <Image imageSrc={card.imageSrc} />
                        )}
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See Event Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
