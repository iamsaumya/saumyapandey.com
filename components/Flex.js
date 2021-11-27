// @flow
import * as React from "react";
import styled from "styled-components";

const Flex = React.forwardRef((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <Container ref={ref} {...restProps}>
      {children}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex: ${({ auto }) => (auto ? "1 1 auto" : "initial")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-shrink: ${({ shrink }) => (shrink ? 1 : "initial")};
  gap: ${({ gap }) => (gap ? `${gap}rem` : "initial")};
  min-height: 0;
  min-width: 0;
`;

export default Flex;
