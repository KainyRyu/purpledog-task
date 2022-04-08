import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    margin-bottom: 15px;
`;

const TitleWrap = Styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 26px;
`;

const SubtitleWrap = Styled.div`
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
`;

export default function Title({ title, subtitle }) {
  return (
    <Container>
      <TitleWrap>{title}</TitleWrap>
      <SubtitleWrap>{subtitle}</SubtitleWrap>
    </Container>
  );
}
