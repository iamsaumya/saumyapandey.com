import React from "react";
import styled from "styled-components";

const Highlighter = ({ children }) => {
  const [highlighterUtils, setUtils] = React.useState({
    Width: 0,
    X: 0,
    Opacity: 0,
  });

  const onMouseEnter = React.useCallback((e) => {
    setUtils({
      Width: Math.ceil(e.target.getBoundingClientRect().width),
      X: Math.ceil(
        e.target.getBoundingClientRect().left -
          e.target.parentNode.getBoundingClientRect().left
      ),
      Opacity: 1,
    });
  });

  const onMouseLeave = React.useCallback((e) => {
    setUtils((prev) => ({
      ...prev,
      Opacity: 0,
    }));
  });

  return (
    <>
      <NavHighlight
        {...highlighterUtils}
        style={{
          opacity: highlighterUtils.Opacity === 1 ? 1.0 : 0.0,
          width: highlighterUtils.Width + "px",
          transform: `translateX(${highlighterUtils.X}px)`,
        }}
      />
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onMouseEnter,
            onMouseLeave,
            key: index,
          });
        }
      })}
    </>
  );
};

const NavHighlight = styled.div`
  position: absolute;
  left: 0;
  height: 36px;
  contain: strict;
  background-color: var(--orange-100);
  border-radius: 2px;
  z-index: -1;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
`;

export default Highlighter;
