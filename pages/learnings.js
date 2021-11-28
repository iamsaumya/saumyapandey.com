import styled from "styled-components";
import Achievement from "../components/Achievement";
import Flex from "../components/Flex";

const Learnings = () => {
  return (
    <Stack>
      <Flex gap={1} column>
        <div>
          <Heading mb="4">March 2021</Heading>
          <Achievement text="Contributions and preparation for GSoC" />
          <Achievement text="Contributions to Outline" />
          <Achievement text="Boring college chores" />
        </div>
        <div>
          <Heading mb="4">February 2021</Heading>
          <Achievement text="Start building Btech final year project" />
          <Achievement text="Contributions to Outline" />
          <Achievement text="Read Alex Rauschmayer's JS for impatient programmer" />
        </div>
        <div>
          <Heading mb="4">January 2021</Heading>
          <Achievement text="Nothing much, wasted a lot of time." />
        </div>
        <div>
          <Heading mb="4">December 2020</Heading>
          <Achievement text="Busy with university exams" />
        </div>
        <div>
          <Heading mb="4">November 2020</Heading>
          <Achievement text="Ben Awad's Lireddit course" />
          <Achievement text="Dan Abramov's JustJavascript course" />
          <Achievement
            text="Fullstack Node.js"
            isLink
            link={"https://newline.co/fullstack-nodejs"}
          />
          <Achievement
            text="Fullstack GraphQL"
            isLink
            link={"https://newline.co/fullstack-graphql"}
          />
        </div>
      </Flex>
    </Stack>
  );
};

const Stack = styled.article`
  font-size: 1.2rem;
`;

const Heading = styled.h1`
  margin-bottom: 1rem;
`;

export default Learnings;
