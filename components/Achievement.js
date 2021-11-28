import styled, { css } from "styled-components";
import { CustomLink } from "../components/MDXComponents";
import Flex from "../components/Flex";
import Check from "../Icon/Check";

const CheckCSS = css`
  margin-right: 0.5rem;
`;

const Achievement = ({ text, isLink = false, link }) => {
  return (
    <Container row align="center">
      <Check color="#077337" size="24" styles={CheckCSS} />
      {isLink ? (
        <CustomLink href={link} isExternal>
          {text}
        </CustomLink>
      ) : (
        text
      )}
    </Container>
  );
};

const Container = styled(Flex)`
  margin-bottom: 0.5rem;
`;

export default Achievement;
