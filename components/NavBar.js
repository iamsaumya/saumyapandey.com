import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import Flex from "./Flex";
import NavLink from "./NavLink";
import { breakpoint } from "styled-components-breakpoint";

const NavBar = () => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Nav column>
      <Flex row justify="center" align="flex-start">
        <NavContainer row justify="space-between" align="center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/learnings">Learnings</NavLink>
          <NavLink href="/failures">Failures</NavLink>
          <NavLink href="/static/resume.pdf">Resume</NavLink>
        </NavContainer>
      </Flex>

      {/* Mobile nav bar */}
      <Hambuger onClick={toggleMenu}>
        {show ? <AiOutlineClose size="32" /> : <AiOutlineMenu size="32" />}
      </Hambuger>
      <NavContainerMobile column show={show} justify="center" align="center">
        <NavLink toggleMenu={toggleMenu} isBlock href="/">
          Home
        </NavLink>
        <NavLink toggleMenu={toggleMenu} isBlock href="/blog">
          Blog
        </NavLink>
        <NavLink toggleMenu={toggleMenu} isBlock href="/learnings">
          Learnings
        </NavLink>
        <NavLink toggleMenu={toggleMenu} isBlock href="/failures">
          Failures
        </NavLink>
        <NavLink toggleMenu={toggleMenu} isBlock href="/static/resume.pdf">
          Resume
        </NavLink>
      </NavContainerMobile>
    </Nav>
  );
};

const Nav = styled(Flex)`
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #202124;
  color: #fefefe;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%);
`;

const NavContainer = styled(Flex)`
  max-width: 750px;
  width: 100%;
  display: none;
  padding: 1rem 0;
  ${breakpoint("tablet")`
    display: block;
  `};
`;

const NavContainerMobile = styled(Flex)`
  height: ${(props) => (props.show ? "100%" : "0")};
  transform: ${(props) =>
    props.show ? `translateX(0px)` : `translateX(-1000px)`};
  transition: height 100ms cubic-bezier(0, 0.7, 0.79, 0.67);
  padding-bottom: 0.5rem;

  ${breakpoint("tablet")`
    display: none;
  `};
`;

const Hambuger = styled.div`
  display: block;
  padding: 0.5rem 0 0.5rem 0.5rem;

  ${breakpoint("tablet")`
    display: none;
  `};
`;

export default NavBar;
