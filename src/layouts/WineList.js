import React from 'react';
import Styled from 'styled-components';
import Title from './Title';

const Container = Styled.div`

`;

export default function WineList() {
  return (
    <Container>
      <Title
        title="김새콤달콤님께 맞는 와인"
        subtitle="회원님이 선택한 취향의 와인만 추천드려요."
      />

      <div>Wine Lists</div>
    </Container>
  );
}
