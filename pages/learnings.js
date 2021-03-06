import { Stack, Box, Heading } from "@chakra-ui/core";
import Achievement from "../components/Achievement";

const Learnings = () => {
  return (
    <Stack as="article" fontSize={["1rem", "1.2rem"]}>
      <Box>
        <Heading mb="4">March 2021</Heading>
        <Achievement text="Contributions and preparation for GSoC" />
        <Achievement text="Contributions to Outline" />
        <Achievement text="Boring college chores" />
        <Heading mb="4">February 2021</Heading>
        <Achievement text="Start building Btech final year project" />
        <Achievement text="Contributions to Outline" />
        <Achievement text="Read Alex Rauschmayer's JS for impatient programmer" />
        <Heading mb="4">January 2021</Heading>
        <Achievement text="Nothing much, wasted a lot of time." />
        <Heading mb="4">December 2020</Heading>
        <Achievement text="Busy with university exams" />
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
      </Box>
    </Stack>
  );
};

export default Learnings;
