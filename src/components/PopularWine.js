import ProductContainer from 'components/RecommendWine';
import React, { useState } from 'react';
import Styled from 'styled-components';

const Container = Styled.div`

`;

export default function PopularWine({ product }) {
  const { name, salesePrice, wineTypeName } = product;
  console.log(product);
  return (
    <Container>
      <ProductContainer product={product} />
    </Container>
  );
}
