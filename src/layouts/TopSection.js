import React from 'react';
import Styled from 'styled-components';
import searchImg from '../assets/icons/search/search.png';
import alertImg from '../assets/icons/alert/alert.png';
import bagImg from '../assets/icons/bag/bag.png';

const Container = Styled.div`
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    z-index: 5;
`;
const RightIconContainer = Styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;

`;
const ImgContainer = Styled.div`
  position: relative;
`;
const Img = Styled.img`
    width: 30px;
    height: 30px;
`;

const RedDot = Styled.div`
  position: absolute;
  top:0;
  right: 0;
  width: 6px;
  height: 6px;
  background-color: #FF005F;
  border-radius: 30px;
`;

const BagCount = Styled.div`
  position: absolute;
  top:-3px;
  right: -6px;
  width: 20px;
  height: 18px;
  background-color: #FF005F;
  border-radius: 30px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TopSection() {
  return (
    <Container>
      <div>
        <Img src={searchImg} alt="search" />
      </div>
      <RightIconContainer>
        <ImgContainer>
          <Img src={alertImg} alt="alert" />
          <RedDot />
        </ImgContainer>
        <ImgContainer>
          <Img src={bagImg} alt="bag" />
          <BagCount>
            <span>14</span>
          </BagCount>
        </ImgContainer>
      </RightIconContainer>
    </Container>
  );
}
