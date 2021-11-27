import React from "react";
import { Twitter, Github, Linkedin, Mail } from "../Icon";
import styled from "styled-components";

const Socials = () => {
  return (
    <div>
      <a href="https://twitter.com/iamsaumya137" alt="Twitter" target="_blank">
        <IconButton aria-label="Twitter">
          <Twitter size={24} />
        </IconButton>
      </a>
      <a href="https://github.com/iamsaumya" alt="GitHub" target="_blank">
        <IconButton aria-label="GitHub">
          <Github />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/iamsaumya"
        alt="LinkedIn"
        target="_blank"
      >
        <IconButton aria-label="Linkedin">
          <Linkedin />
        </IconButton>
      </a>
      <a href="mailto:pandeyysaumya@gmail.com" alt="Email" target="_blank">
        <IconButton aria-label="Mail">
          <Mail />
        </IconButton>
      </a>
    </div>
  );
};

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  color: white;

  &:hover {
    color: #ed7842;
  }
`;

export default Socials;
