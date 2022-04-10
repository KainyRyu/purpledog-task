import React from 'react';
import Styled from 'styled-components';
import feed from '../assets/icons/feed/feed.png';
import magazine from '../assets/icons/magazine/magazine.png';
import home from '../assets/icons/home/home.png';
import category from '../assets/icons/category/category.png';
import user from '../assets/icons/user/user.png';

const Container = Styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100vw;
  background: white;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 -3px 30px #00000033;
  padding-top: 8px;
`;
const Button = Styled.button`
  border-style: none;
  background: none;
  height: 50px;
`;
const Img = Styled.img`
    width: 30px;
    height: 30px;
`;
const ButtonName = Styled.div`
  font-size: 8px;
  font-weight: 500;
  line-height: 11px;

`;

export default function Gnb() {
  return (
    <Container>
      <Button>
        <Img src={home} alt="home" />
        <ButtonName>홈</ButtonName>
      </Button>
      <Button>
        <Img src={magazine} alt="magazine" />
        <ButtonName>매거진</ButtonName>
      </Button>
      <Button>
        <Img src={category} alt="category" />
        <ButtonName>카테고리</ButtonName>
      </Button>
      <Button>
        <Img src={feed} alt="feed" />
        <ButtonName>피드</ButtonName>
      </Button>
      <Button>
        <Img src={user} alt="my info" />
        <ButtonName>내정보</ButtonName>
      </Button>
    </Container>
  );
}
