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
  color: #fefefe;

  &[id]:hover > a {
    display: inline;
  }
`;

const Heading1 = css`
  .content-wrapper h1 {
    ${BaseHeading}
    font-size: var(--36px);
    line-height: var(--44px);
    margin-top: var(--54px);
    margin-bottom: var(--36px);
  }
`;

const Heading2 = css`
  .content-wrapper h2 {
    ${BaseHeading}
    font-size: var(--32px);
    line-height: var(--40px);
    margin-top: var(--48px);
    margin-bottom: var(--32px);
  }
`;

const Heading3 = css`
  .content-wrapper h3 {
    ${BaseHeading}
    font-size: var(--28px);
    line-height: var(--36px);
    margin-top: var(--42px);
    margin-bottom: var(--28px);
  }
`;

const Heading4 = css`
  .content-wrapper h4 {
    ${BaseHeading}
    font-size: var(--24px);
    line-height: var(--30px);
    margin-top: var(--36px);
    margin-bottom: var(--24px);
  }
`;

const P = css`
  .content-wrapper p {
    font-size: var(--18px);
    line-height: var(--30px);
    margin-top: var(--18px);
    margin-bottom: var(--18px);
  }
`;

const listItemCSS = css`
  list-style: auto;
  font-size: var(--18px);
  line-height: var(--30px);
  margin-top: var(--12px);
  margin-bottom: var(--12px);
  padding-left: var(--32px);
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
    padding-left: var(--8px);
  }
`;

const InlineCode = css`
  .content-wrapper :not(pre) > code {
    color: rgb(255 139 139);
    background-color: #202124;
    padding: var(--2px);
    border-radius: 4px;
    font-size: var(--14px);
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
  ${Heading4}
  ${P}
  ${OL}
  ${UL}
  ${LI}
  ${InlineCode}
  ${HR}
`;

export default Article;
