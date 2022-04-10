import React from 'react';
import Styled from 'styled-components';
import ItemDetailContainer from './ItemDetailContainer';

const Container = Styled.li`
  width: 140px;
  margin-right: 10px;
  margin-bottom: 15px;
  display:  block;
`;
const Thumbnail = Styled.img`
  borderRadius: 6px;
  height: 169px;
  width: 140px;
  background: #f7f7f7`;

export default function RecommendWine({ product }) {
  const {
    thumbnailImageUrl,
    name,
    countryName,
    discountPrice,
    salesPrice,
    discountPercent,
    styleNames,
    timeSaleStartDate,
  } = product;

  return (
    <Container>
      <Thumbnail src={thumbnailImageUrl} alt={name} />
      <ItemDetailContainer
        countryName={countryName}
        styleNames={styleNames}
        name={name}
        discountPrice={discountPrice}
        discountPercent={discountPercent}
        salesPrice={salesPrice}
        timeSaleStartDate={timeSaleStartDate}
      />
    </Container>
  );
}
