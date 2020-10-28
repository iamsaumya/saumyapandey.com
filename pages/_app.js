import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode
} from "@chakra-ui/core";
import theme from "../styles/theme";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import { Global, css } from "@emotion/core";
import Container from "../components/Container.js";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/MDXComponents";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

const GlobalStyle = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
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
            background: ${colorMode === "light" ? "white" : "#171923"};
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
          <ColorModeProvider value="dark">
            <DefaultSeo {...SEO} />
            <GlobalStyle />
            <Head>
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <meta content="#ffffff" name="theme-color" />
              <meta content="#ffffff" name="msapplication-TileColor" />
              <meta
                content="/static/favicons/browserconfig.xml"
                name="msapplication-config"
              />
            </Head>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ColorModeProvider>
        </ThemeProvider>
      </MDXProvider>
    </>
  );
}

export default App;
