import PropTypes, { InferProps } from 'prop-types';
import React, { CSSProperties, Requireable } from 'react';
import styled from 'styled-components';
import { card } from 'styles';

const CardDiv = styled.div`
  ${card}
  ${({ style }) => style}
`;

const CardTitle = styled.p`
  font-size: 2em;
  text-align: center;
  font-weight: bold
`;

export default function Card({ children, title, style }: InferProps<typeof Card.propTypes>) {

  return (
    <CardDiv style={style}>
      <CardTitle>{title}</CardTitle>
      {children}
    </CardDiv>
  );

}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title   : PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style   : PropTypes.object as Requireable<CSSProperties>
};

Card.defaultProps = {
  title: '',
  style: {}
};
