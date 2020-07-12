import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mainColor } from 'styles/colors';
import { bodyFont } from 'styles/fonts';
import { scrollbar } from 'styles/scrollbar';
import NavBar from './navBar/NavBar';
import PageHeader from './PageHeader';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  body {
    ${scrollbar}
    margin:0;
    padding:0;
    width: 100%;
    padding-bottom: 20px;
    overflow-x: hidden;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  input {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid ${mainColor};
    outline: none
  }
`;

const Container = styled.div`
  margin: 0 8vw;
  font-family: ${bodyFont};
`;

type Props = {
  header?: string
  children: JSX.Element[] | JSX.Element
};

const Layout: FC<Props> = ({ children, header }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <NavBar siteTitle={data.site.siteMetadata.title} />
      <Container>
        <PageHeader text={header} />
        {children}
      </Container>
    </>
  );

};

export default Layout;
