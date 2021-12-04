import { useEffect } from "react";
import Container from "../components/Container.js";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { prismDarkTheme } from "../styles/prism";

const GlobalStyle = createGlobalStyle`
  ${prismDarkTheme};

  html {
    min-width: 360px;
    scroll-behavior: smooth;
  }
  :root {
    font-size: 16px;
    font-family: "Outfit", sans-serif;
  }
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #202124;
    color: #fefefe;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: -0.01em;
  }
  ::selection {
    background-color: #ed7842;
    color: #fefefe;
  }
`;

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
      <ThemeProvider theme={{}}>
        <DefaultSeo {...SEO} />
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#202124" name="theme-color" />
          <meta content="#202124" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />
        </Head>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </MDXProvider>
  );
}

export default App;
