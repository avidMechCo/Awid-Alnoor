import React, {useEffect, useState} from "react"; 
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { getCategoryProductByServiceId} from "../../services/apiService";
import SNN from "images/SNN-architectures.jpg"
import Ergonomy from "images/ergo.png"
import face from "images/face.png"
import Age from "images/Age-detector-1.png"
import cyberbulying from "images/cyber.webp"
import translation from "images/translation.webp"
import segmentation from "images/segmentation.jpg"
import recognition from "images/recognition.jpg"
import movement from "images/movement.png"
import H1N1 from "images/H1N1.jpg"
import emotion from "images/emtion.jpg"
import bed from "images/Bed.jpg"
import cnn from "images/as.png"
import cyber from "images/cyber.png"
import unet from "images/Unet.png"
import yolo from "images/yolo.png"

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

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRelatedContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRelated = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
//const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
const topicNames = ["Computer Vision", "NLP", "Expert System", "Hybrid System"];



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
        imageSrc:SNN,
        title: "Object detetction in night",
        content: "SNN for fast and acuuracyt object detetction in night",
        related: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:Ergonomy,
        title: "Ergonomy detection",
        content: "Ergonomy detection using convolution based on nueral netwrok",
        related: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:face,
        title: "Face recognition",
        content: "Face recognition using the predefined model.",
        related: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:Age,
        title: "Age & gender detetcion",
        content: "Detetcion using combination of deep and machine learning models.",
        related: "3.9",
        reviews: "26",
        url: "#"
      }
    ],
    [topicNames[1]]: [
      {
        imageSrc: cyberbulying,
        title: "Detetcing the cyberbulying",
        content: "Detetcing the cyberbulying activities in social media platforms like Twitter",
        related: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:translation,
        title: "Smoth translation",
        content: " Translation in French, Spanish, Arabic, to English",
        related: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: segmentation,
        title: "Tokenization model",
        content: "Developing tokenization model for segmentation, steming, and name entity recognition.",
        related: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:recognition,
        title: "Emotion recognition",
        content: "Emotion recognition via the contextual information using the transformer model.",
        related: "4.9",
        reviews: "89",
        url: "#"
      }],
    [topicNames[2]]:[
      {
        imageSrc: movement,
        title: "Detetcing body movement",
        content: "Using combination of transfer leraning and Resnet 32 network",
        related: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc: H1N1,
        title: "Discriminating",
        content: "Betweeen H1N1 Influenza and COVID-19 using combination of CNN and PSO",
        related: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: emotion,
        title: "Detecting face emotion",
        content: "Detecting face emotion using fused transformers models",
        related: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:bed,
        title: "The hospital beds",
        content: "Managing the hospital beds using CNN with GA for length of Stay predictio",
        related: "4.9",
        reviews: "89",
        url: "#"
      }],
    [topicNames[3]]: [
      {
        imageSrc: cnn,
        title: "CNN optimized",
        content: "Combination of CNN optimized with GWO and WO for cyberbullying detetcion.",
        related: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:cyber,
        title: "cybersecurity classiifcation",
        content: "Combination for the CNN with RF and SCM for cybersecurity classiifcation.",
        price: "$2.99",
        related: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: unet,
        title: "percitipant level forecasting",
        content: "Combining Unet with genetic algorithm for percitipant level forecasting.",
        price: "$7.99",
        related: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc: yolo,
        title: "object detetcion",
        content: "Combining Yolo 7 with genetic algorithm for customized object detetcion.",
        price: "$7.99",
        related: "4.9",
        reviews: "89",
        url: "#"
      }]}

  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  
  const [category, setCategory] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const {data: Services} = await getCategoryProductByServiceId(1);
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
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRelatedContainer>
                      <CardRelated>
                        <StarIcon />
                        {card.related}
                      </CardRelated>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRelatedContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Show More</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};


