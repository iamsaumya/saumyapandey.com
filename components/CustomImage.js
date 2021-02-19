import Image from "next/image";
import { Box } from "@chakra-ui/core";

const CustomImage = (props) => {
  return (
    <Box
      backgroundColor="#202124"
      borderRadius="8px"
      border="1px solid rgb(32, 32, 34)"
      boxShadow="0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%)"
      my={2}
    >
      <Image {...props} />
    </Box>
  );
};

export default CustomImage;
