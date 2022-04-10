import React from 'react';
import Styled from 'styled-components';
import ItemDetailContainer from './ItemDetailContainer';

const Container = Styled.li`
  width: calc(50vw - 20.5px);
  margin-bottom: 28px;
`;

const ThumbnailContainer = Styled.div`
  background: #f7f7f7;
  border-radius: 6px;
  margin-bottom: 10px;
`;
const Thumbnail = Styled.img`
  width: 100%;
  height: calc(50vw);
  transform: scale(0.8);
`;

export default function PopularWine({ product }) {
  const {
    name,
    wineTypeName,
    thumbnailImageUrl,
    countryName,
    discountPercent,
    discountPrice,
    salesPrice,
    timeSaleStartDate,
  } = product;

  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail src={thumbnailImageUrl} alt={name} />
      </ThumbnailContainer>
      <ItemDetailContainer
        type="popular"
        countryName={countryName}
        name={name}
        discountPrice={discountPrice}
        discountPercent={discountPercent}
        salesPrice={salesPrice}
        timeSaleStartDate={timeSaleStartDate}
        styleNames={wineTypeName}
      />
    </Container>
  );
}
