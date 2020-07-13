import React, { FC } from 'react';
import styled from 'styled-components';
import { button } from 'styles/button';

const StyledButton = styled.div`
  ${button}
`;

type Props = {
  text: string,
  type: string
};

const Button: FC<Props> = ({ text, type }) => (
  <>
    <StyledButton type={type}>{text}</StyledButton>
  </>
);

export default Button;
