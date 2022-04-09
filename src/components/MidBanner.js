import { getMainBanner } from 'lib/apis';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

const BannerImg = Styled.img`
  width: 100%;
`;

export default function MidBanner() {
  const [bannerImg, setBannerImg] = useState();
  useEffect(() => {
    getMainBanner('MAIN_SUB_2').then(({ data }) => setBannerImg(data.results[0]));
  }, []);

  return <BannerImg src={bannerImg?.thumbnailImageUrl} alt={bannerImg?.description} />;
}
