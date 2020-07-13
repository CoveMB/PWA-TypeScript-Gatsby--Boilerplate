import React, { FC } from 'react';
import styled from 'styled-components';
import { mainColor } from 'styles/colors';
import { headerFont } from 'styles/fonts';

const Header = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: ${mainColor};
  font-family: ${headerFont}
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto
`;

type Props = {
  text: string
};

const PageHeader: FC<Props> = ({ text = '' }) => (
  <Div>
    <Header>{text}</Header>
  </Div>
);

export default PageHeader;
