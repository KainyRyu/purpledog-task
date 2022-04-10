import React from 'react';
import Styled from 'styled-components';
import france from 'assets/countries/france.png';
import italy from 'assets/countries/italy.png';
import usa from 'assets/countries/usa.png';
import portugal from 'assets/countries/portugal.png';
import aus from 'assets/countries/aus.png';
import spain from 'assets/countries/spain.png';
import Title from './Title';

// france:{kor:'',
// img:france
// }, italy:{kor:'',
// img:italy
// }, usa:{kor:'',
// img:usa
// }, portugal:{kor:'',
// img:portugal
// }, aus:{kor:'',
// img:aus
// }, spain:{kor:'',
// img:spain
// }

const COUNTRY_COLLECTION = ['france', 'italy', 'usa', 'portugal', 'aus', 'spain'];
const COUNTRY_COLLECTION_KOR = {
  france: { kor: '프랑스', img: france },
  italy: { kor: '이탈리아', img: italy },
  usa: { kor: '미국', img: usa },
  portugal: { kor: '포루투갈', img: portugal },
  aus: { kor: '호주', img: aus },
  spain: { kor: '스페인', img: spain },
};

const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ButtonContainer = Styled.a`
  // width: calc(50% - 6px);
  width: calc(50vw - 20.5px);
  margin-bottom: 10px;
  position: relative;
`;
const CountryImg = Styled.img`
  width: 100%;
  height: auto;
`;

const CountryText = Styled.div`
  color: #ffffff;
  text-shadow: 1px 1px 0 #00000026;
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export default function CountrySelectSection({ title, subtitle }) {
  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <Container>
        {COUNTRY_COLLECTION.map((country, idx) => (
          <ButtonContainer key={idx}>
            <CountryImg src={COUNTRY_COLLECTION_KOR[country].img} alt="country" />
            <CountryText>{COUNTRY_COLLECTION_KOR[country].kor}</CountryText>
          </ButtonContainer>
        ))}
      </Container>
    </>
  );
}
