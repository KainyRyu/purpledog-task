import React from 'react';
import Styled from 'styled-components';
import TimeIcon from 'assets/icons/time/time.png';
import dayjs from 'dayjs';

const Container = Styled.div(({ type }) => ({
  marginLeft: type === 'timeSale' ? '15px' : '0',
}));

const SubContext = Styled.div`
  color: #C5C5C5;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  display: flex;
`;
const Dot = Styled.div`
  width: 2px;
  height: 2px;
  border-radius: 30px;
  background-color: #CBCBCB;
  display: inline;
  margin: auto 4px;
`;
const WineName = Styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 5px;
  overflow: hidden;
  display: -webkit-box;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ type }) => (type === 'popular' ? 1 : 2)};
`;
const Price = Styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const DiscountPercent = Styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: #FF0045;
  margin-right: 5px;
  `;
const SalesPrice = Styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  text-decoration-line: line-through;
  color: #CBCBCB;
`;

const TimeSaleContainer = Styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  height: 22px;
  width: 86px;
  font-size: 10px;
  background-color: #FF0045;
  color: #FFFFFF;
`;

const TimeSaleImg = Styled.img`
  width: 14px;
  height: 14px;
  margin-right: 2px;
`;

export default function ItemDetailContainer({
  type,
  countryName,
  styleNames,
  name,
  discountPercent,
  discountPrice,
  salesPrice,
  timeSaleStartDate,
}) {
  return (
    <Container type={type}>
      <SubContext>
        <span>{countryName}</span>
        <Dot />
        <span>{styleNames}</span>
      </SubContext>
      <WineName type={type}>{name}</WineName>
      <Price>{discountPrice ? discountPrice : salesPrice}원</Price>
      <div>
        {discountPercent && (
          <>
            <DiscountPercent>{discountPercent}%</DiscountPercent>
            <SalesPrice>{`${salesPrice}`}원</SalesPrice>
          </>
        )}
        {type === 'timeSale' && (
          <TimeSaleContainer>
            <TimeSaleImg src={TimeIcon} alt="time sale" />
            {dayjs(timeSaleStartDate).format('HH:mm:ss 남음')}
          </TimeSaleContainer>
        )}
      </div>
    </Container>
  );
}
