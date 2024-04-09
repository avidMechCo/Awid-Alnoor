import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:
        "https://media.nature.com/lw767/magazine-assets/d41586-024-00869-0/d41586-024-00869-0_26887752.jpg?as=webp",
      category: "article",
      date: "March 21, 2024",
      title: "Google AI could soon use a person’s cough to diagnose disease",
      description:
        "A team led by Google scientists has developed a machine-learning tool that can help to detect and monitor health conditions by evaluating noises such as coughing and breathing. The artificial intelligence (AI) system1, trained on millions of audio clips of human sounds, might one day be used by physicians to diagnose diseases including COVID-19 and tuberculosis and to assess how well a person’s lungs are functioning.",
      url: "https://www.nature.com/articles/d41586-024-00869-0",
      featured: true
    },
    {
      imageSrc:
        "https://media.nature.com/lw767/magazine-assets/d41586-024-01042-3/d41586-024-01042-3_26908788.jpg?as=webp",
      category: "career column",
      date: "April 19, 2020",
      title: "Three ways ChatGPT helps me in my academic writing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://www.nature.com/articles/d41586-024-01042-3"
    },
    {
      imageSrc:
        "https://media.nature.com/lw767/magazine-assets/d41586-024-01003-w/d41586-024-01003-w_26913780.jpg?as=webp",
      category: "technology features",
      date: "April 08, 2024",
      title: "How generative AI aids in accessibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://www.nature.com/articles/d41586-024-01003-w"
    },
    {
      imageSrc:
        "https://media.nature.com/lw767/magazine-assets/d41586-024-01002-x/d41586-024-01002-x_26937730.jpg?as=webp",
      category: "career feature ",
      date: "April 08, 2024",
      title: "Ready or not, AI is coming to science education",
      description:
        "The world had never heard of ChatGPT when Johnny Chang started his undergraduate programme in computer engineering at the University of Illinois Urbana–Champaign in 2018. All that the public knew then about assistive artificial intelligence (AI) was that the technology powered joke-telling smart speakers or the somewhat fitful smartphone assistants.",
      url: "https://www.nature.com/articles/d41586-024-01002-x"
    },
    {
      imageSrc:
        "https://media.nature.com/w1248/magazine-assets/d41586-024-00780-8/d41586-024-00780-8_26889926.jpg?as=webp",
      category: "career feature ",
      date: "March 26, 2024",
      title: "How AI is improving climate forecasts",
      description:
        "The world had never heard of ChatGPT when Johnny Chang started his undergraduate programme in computer engineering at the University of Illinois Urbana–Champaign in 2018. All that the public knew then about assistive artificial intelligence (AI) was that the technology powered joke-telling smart speakers or the somewhat fitful smartphone assistants.",
      url: "https://www.nature.com/articles/d41586-024-00780-8"
    },
    {
      imageSrc:
        "https://media.nature.com/lw767/magazine-assets/d41586-024-00639-y/d41586-024-00639-y_26807262.jpg?as=webp",
      category: "career feature ",
      date: "April 08, 2024",
      title: "Why scientists trust AI too much,and what to do about",
      description:
        "The world had never heard of ChatGPT when Johnny Chang started his undergraduate programme in computer engineering at the University of Illinois Urbana–Champaign in 2018. All that the public knew then about assistive artificial intelligence (AI) was that the technology powered joke-telling smart speakers or the somewhat fitful smartphone assistants.",
      url: "https://www.nature.com/articles/d41586-024-00639-y"
    },
    getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com"
});
