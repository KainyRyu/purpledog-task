import React from 'react';
import Styled from 'styled-components';
import PromotionBanner from 'assets/banners/promotion.png';
import Title from './Title';

const Container = Styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const PromotionImg = Styled.img`
  width: 100%;
`;

const TextContainer = Styled.div`
  position: absolute;
  bottom: 26px;
  left: 15px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
`;

const PeriodText = Styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  opacity: 0.5;
`;

export default function PromotionSection({ title, subtitle }) {
  return (
    <Container>
      <Title title={title} subtitle={subtitle} isMore />
      <PromotionImg src={PromotionBanner} alt="promotion" />
      <TextContainer>
        <div>
          와인으로 떠나는 세계여행,
          <br /> 와인 기획전 OPEN!
        </div>
        <PeriodText>22.02.15 - 22.03.15</PeriodText>
      </TextContainer>
    </Container>
  );
}
