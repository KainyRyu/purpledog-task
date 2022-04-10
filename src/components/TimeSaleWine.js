import React from 'react';
import Styled from 'styled-components';
import ItemDetailContainer from './ItemDetailContainer';

const Container = Styled.li`
  width: 100% ;
  margin-right: 10px;
  margin-bottom: 15px;
  display: flex;
`;

const Thumbnail = Styled.img`
  borderRadius: ;6px;
  height: 132px;
  width: 110px;
  margin-right: 15px;
  background: #f7f7f7;
  `;

export default function TimeSaleWine({ product }) {
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
        discountPercent={discountPercent}
        discountPrice={discountPrice}
        salesPrice={salesPrice}
        timeSaleStartDate={timeSaleStartDate}
      />
    </Container>
  );
}
