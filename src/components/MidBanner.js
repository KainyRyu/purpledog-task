import { BANNER_CODE, getMainBanner } from 'lib/apis';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  position: relative;
`;

const BannerImg = Styled.img`
  width: 100%;
`;

const TextContainer = Styled.div`
  position: absolute;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #ffffff;
  left: 20px;
  bottom: calc(50% - 24px);
`;

export default function MidBanner() {
  const [bannerImg, setBannerImg] = useState();
  useEffect(() => {
    getMainBanner(BANNER_CODE.sub2).then(({ data }) => setBannerImg(data.results[0]));
  }, []);

  return (
    <Container>
      <BannerImg src={bannerImg?.thumbnailImageUrl} alt={bannerImg?.description} />
      <TextContainer>
        퍼플독과 함께한
        <br /> 인증샷 투어
      </TextContainer>
    </Container>
  );
}
