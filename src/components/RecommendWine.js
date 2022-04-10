import React from 'react';
import Styled from 'styled-components';
import ItemDetailContainer from './ItemDetailContainer';

const Container = Styled.li`
  width: 140px;
  margin-right: 10px;
  margin-bottom: 15px;
  display:  block;
`;

const ThumbnailContainer = Styled.div`
  background: #f7f7f7;
  margin-bottom: 8px;
`;
const Thumbnail = Styled.img`
  transform: scale(0.8);
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
    englishName,
  } = product;

  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail src={thumbnailImageUrl} alt={name} />
      </ThumbnailContainer>
      <ItemDetailContainer
        countryName={countryName}
        styleNames={styleNames}
        name={englishName}
        discountPrice={discountPrice}
        discountPercent={discountPercent}
        salesPrice={salesPrice}
        timeSaleStartDate={timeSaleStartDate}
      />
    </Container>
  );
}
