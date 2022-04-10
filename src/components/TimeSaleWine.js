import React from 'react';
import Styled from 'styled-components';
import ItemDetailContainer from './ItemDetailContainer';

const Container = Styled.li`
  width: 100% ;
  margin-right: 10px;
  margin-bottom: 15px;
  display: flex;
  height: 132px;
`;

const ThumbnailContainer = Styled.div`
  background: #f7f7f7;
  width: 110px;
  border-radius: 6px;
  `;

const Thumbnail = Styled.img`
  width: 100%;
  height: 100%;
  margin-right: 15px;
  background: #f7f7f7;
  transform: scale(0.8);
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
      <ThumbnailContainer>
        <Thumbnail src={thumbnailImageUrl} alt={name} />
      </ThumbnailContainer>
      <ItemDetailContainer
        type="timeSale"
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
