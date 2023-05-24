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
    --3px: 0.1875rem;
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
    --orange-50: #ED682B;
    --orange-100: #D55E27;
    --orange-200: #BE5322;
    --orange-300: #A6491E;
    --orange-400: #8E3E1A;
    --orange-500: #773416;
    --orange-600: #5F2A11;
    --orange-700: #471F0D;
    --orange-800: #2F1509;
    --orange-900: #180A04;
    --orange-1000: #000000;
    --blue-50: #2D9BFB;
    --blue-100: #298CE2;
    --blue-200: #247CC9;
    --blue-300: #1F6DB0;
    --blue-400: #1B5D97;
    --blue-500: #174E7E;
    --blue-600: #123E64;
    --blue-700: #0D2E4B;
    --blue-800: #091F32;
    --blue-900: #040F19;
    --blue-1000: #000000;
    --gray-50: #9CA6B0;
    --gray-100: #8A939C;
    --gray-200: #7A828A;
    --gray-300: #6A7178;
    --gray-400: #5A6066;
    --gray-500: #4B4F54;
    --gray-600: #3B3F42;
    --gray-700: #2B2E30;
    --gray-800: #222426;
    --gray-900: #1F2123;
    --gray-1000: #17181A;
    --white-50: ##F5F7FA;
    --white-100: #EBEDF0;
    --white-200: #E1E3E5;
    --white-300: #D7D9DB;
    --white-400: #CDCFD1;
    --white-500: #C3C5C7;
    --white-600: #AAACAD;
    --white-700: #898B8C;
    --white-800: #646566;
    --white-900: #4B4C4D;
    --white-1000: #19191A;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--gray-1000);
    color: var(--white-50);
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
    background-color: #BE5322;
    color: #FAF6F5;
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
