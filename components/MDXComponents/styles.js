import styled, { css } from "styled-components";

const Table = css`
  .content-wrapper table {
    text-align: left;
    margin-bottom: 32px;
    width: 100%;
  }
`;

const THead = css`
  .content-wrapper th {
    background: #3c3e43;
    font-weight: 400;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`;

const TData = css`
  .content-wrapper td {
    padding: 0.5rem;
    border-bottom-width: 1px;
    border-color: "inherit";
    font-size: 1rem;
    white-space: normal;
  }
`;

const BaseHeading = css`
  scroll-snap-align: start;
  scroll-margin-top: 6rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  color: #fefefe;

  &[id]:hover > a {
    display: inline;
  }
`;

const Heading1 = css`
  .content-wrapper h1 {
    ${BaseHeading}
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Heading2 = css`
  .content-wrapper h2 {
    ${BaseHeading}
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const Heading3 = css`
  .content-wrapper h3 {
    ${BaseHeading}
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

const P = css`
  .content-wrapper p {
    padding-bottom: 1.4rem;
    line-height: 1.625;
  }
`;

const listItemCSS = css`
  list-style: auto;
  padding-bottom: 1rem;
  padding-left: 1rem;
  margin-left: 0.5rem;
`;

const OL = css`
  .content-wrapper ol {
    ${listItemCSS}
  }
`;

const UL = css`
  .content-wrapper ul {
    ${listItemCSS}
  }
`;

const LI = css`
  .content-wrapper li {
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
  }
`;

const InlineCode = css`
  .content-wrapper p > code {
    color: rgb(255 139 139);
    background-color: #202124;
    padding: 0.25rem;
    border-radius: 2px;
    font-size: 0.84em;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    border: 1px solid rgb(52 52 55);
  }
`;

const HR = css`
  .content-wrapper hr {
    border-top-width: 0;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 0.006rem solid #aeb0b7;
    opacity: 0.6;
  }
`;

const Article = styled.article`
  ${Table}
  ${THead}
  ${TData}
  ${Heading1}
  ${Heading2}
  ${Heading3}
  ${P}
  ${OL}
  ${UL}
  ${LI}
  ${InlineCode}
  ${HR}
`;

export default Article;
