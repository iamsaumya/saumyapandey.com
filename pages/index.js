import Container from "../components/Container";
import About from "../components/About";
import Content from "../components/Content";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <About />
      <Content />
    </React.Fragment>
  );
}
