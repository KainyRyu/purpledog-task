import React from 'react';
import Styled from 'styled-components';
import ProductContainer from 'components/ProductContainer';

const Container = Styled.ul`
  margin: 15px 0;
  display: flex;
  flex-flow: ${({ listDirection }) => (listDirection === 'vertical' ? 'column' : 'row')};
  list-style: none;
  padding: 0;
`;

export default function WineList({ type, wineList, listDirection }) {
  return (
    <Container listDirection={listDirection}>
      {wineList?.map((product, idx) => (
        <ProductContainer key={idx} type={type} product={product} listDirection={listDirection} />
      ))}
    </Container>
  );
}
