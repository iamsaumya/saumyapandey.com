import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../styles/theme";
import { Global, css } from "@emotion/core";
import Container from "../components/Container.js";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/MDXComponents";
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
      <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </MDXProvider>
    </>
  );
}

export default App;
