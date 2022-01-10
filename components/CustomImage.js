import Image from "next/image";
import styled from "styled-components";

const CustomImage = (props) => {
  return (
    <Box>
      <Image {...props} />
    </Box>
  );
};

const Box = styled.div`
  background-color: #202124;
  padding: 0.2rem;
  border-radius: 8px;
  margin: 20px 0;
`;

export default CustomImage;
