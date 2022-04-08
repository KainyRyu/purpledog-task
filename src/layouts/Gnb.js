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
const Img = Styled.img`
    width: 30px;
    height: 30px;
`;

export default function Gnb() {
  return (
    <Container>
      <div>
        <Img src={searchImg} alt="search" />
      </div>
      <div>
        {/* TODO: Red dot */}
        <Img src={alertImg} alt="alert" />
        {/* TODO: Count */}
        <Img src={bagImg} alt="bag" />
      </div>
    </Container>
  );
}
