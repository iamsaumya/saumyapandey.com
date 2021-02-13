import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core";
import { useEffect } from "react";
import theme from "../styles/theme";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import { Global, css } from "@emotion/core";
import Container from "../components/Container.js";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const GlobalStyle = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#050505"};
          }
          ::selection {
            background-color: #ed7842;
            color: #fefefe;
          }
          @font-face {
            font-family: "FreightTextBook";
            src: local("FreightText Pro Book"),
              local("FreightTextProBook-Regular"),
              url("/static/fonts/Freight Text Pro/FreightTextProBook-Regular.woff2")
                format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "GT Walsheim Pro Bold";
            src: local("GT Walsheim Pro Bold"), local("GTWalsheimPro-Bold"),
              url("/static/fonts/GT Walsheim/GTWalsheimPro-Bold.woff2")
                format("woff2");
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "GT Walsheim Pro";
            src: local("GT Walsheim Pro Regular"),
              local("GTWalsheimPro-Regular"),
              url("/static/fonts/GT Walsheim/GTWalsheimPro-Regular.woff2")
                format("woff2");
            font-weight: normal;
            font-display: swap;
            font-style: normal;
          }
        `}
      />
    </>
  );
};

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <MDXProvider components={MDXComponents}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
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
  );
}

export default App;
