import { Box, Flex, Icon } from "@chakra-ui/core";
import { CustomLink } from "../components/MDXComponents";

const Achievement = ({ text, isLink = false, link }) => {
  console.log(isLink);
  return (
    <Flex mb="2" direction="row" alignItems="center">
      <Icon name="check" color="#077337" mr="4" size="24px" />
      {isLink ? (
        <CustomLink href={link} isExternal>
          {text}
        </CustomLink>
      ) : (
        text
      )}
    </Flex>
  );
};

export default Achievement;
