import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes, { InferProps } from "prop-types";
import React, { ReactElement, useContext } from "react";
import styled, { keyframes } from "styled-components";

import { AuthContext } from "contexts/auth";
import LoggedOut from "components/layout/navBar/NavLoggedOut";
import LoggedIn from "components/layout/navBar/NavLoggedIn";
import { bodyFont, mainColor } from "styles";

const Header = styled.header`
  height: 50px;
  padding: 15px 20px 15px 20px;
  background-color: ${mainColor};
  font-family: ${bodyFont};
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 960;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const spin = keyframes`
100% { transform: rotate(360deg);
}`;

const Icon = styled.div`
  width: 26px;
  margin: 0 10px 5px 0;
  animation: ${spin} 26s linear infinite;
`;

export default function NavBar({
  siteTitle = "",
}: InferProps<typeof NavBar.propTypes>): ReactElement {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Header>
      <Div>
        <Link to="/">
          <Div>
            <Icon>
              <StaticImage
                src="../../../images/gatsby-icon.png"
                alt="Icon image"
              />
            </Icon>
            <Title>{siteTitle}</Title>
          </Div>
        </Link>
        {isAuthenticated ? <LoggedIn /> : <LoggedOut />}
      </Div>
    </Header>
  );
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
};

NavBar.defaultProps = {
  siteTitle: "",
};
