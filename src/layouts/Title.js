import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    margin-bottom: 15px;
`;

const TitleWrap = Styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 26px;
    display: flex;
    justify-content: space-between;
`;

const SubtitleWrap = Styled.div`
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
`;

const MoreLink = Styled.a`
  font-size: 13px;
  line-height: 19px;
  color: #A2A2A2;
`;

export default function Title({ title, subtitle, isMore }) {
  return (
    <Container>
      <TitleWrap>
        <span>{title}</span>
        {isMore && <MoreLink>더보기</MoreLink>}
      </TitleWrap>
      <SubtitleWrap>{subtitle}</SubtitleWrap>
    </Container>
  );
}
