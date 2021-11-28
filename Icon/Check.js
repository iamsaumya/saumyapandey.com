import styled from "styled-components";

const Check = ({ size, color, styles }) => {
  return (
    <Box styles={styles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </Box>
  );
};

const Box = styled.div`
  ${(props) => props.styles};
`;

export default Check;
