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
  border: 0.2rem solid rgb(32, 32, 34);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%);
  margin: 0.5rem 0;
`;

export default CustomImage;
