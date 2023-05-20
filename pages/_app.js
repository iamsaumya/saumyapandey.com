import { useEffect } from "react";
import Container from "../components/Container.js";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { prismDarkTheme } from "../styles/prism";
import cssReset from "../styles/cssreset.css";

const GlobalStyle = createGlobalStyle`
  ${cssReset};
  
  ${prismDarkTheme};

  html {
    min-width: 360px;
    scroll-behavior: smooth;
  }

  :root {
    font-size: 100%;
    font-family: "Outfit", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif;
    --1px: 0.0625rem;
    --2px: 0.125rem;
    --4px: 0.25rem;
    --6px: 0.375rem;
    --8px: 0.5rem;
    --10px: 0.625rem;
    --12px: 0.75rem;
    --14px: 0.875rem;
    --16px: 1rem;
    --18px: 1.125rem;
    --20px: 1.25rem;
    --22px: 1.375rem;
    --24px: 1.5rem;
    --26px: 1.625rem;
    --28px: 1.75rem;
    --30px: 1.875rem;
    --32px: 2rem;
    --36px: 2.25rem;
    --40px: 2.5rem;
    --42px: 2.625rem;
    --44px: 2.75rem;
    --48px: 3rem;
    --54px: 3.375rem;
    --58px: 3.625rem;
    --64px: 4rem;
    --76px: 4.75rem;
    --96px: 6rem;
    --128px: 8rem;
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
    letter-spacing: -0.02em;
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
          <meta content="dark" name="color-scheme" />
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
