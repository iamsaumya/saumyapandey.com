import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../styles/theme";
import { Global, css } from "@emotion/core";
import Container from "../components/Container.js";
import { Head } from "next/document";

const GlobalStyle = () => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
