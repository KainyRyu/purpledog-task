import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { BANNER_CODE, getTimeSale, getRecommend, getMainBanner } from 'lib/apis';
import Title from './Title';
import WineList from './WineList';

const BannerImg = Styled.img`
  width: 100%;
`;

export default function ListContainer({
  type,
  listDirection = 'horizontal',
  title = '',
  subtitle = '',
}) {
  const [data, setData] = useState([]);
  const [wineList, setWineList] = useState([]);
  const [timeSaleBanner, setTimeSaleBanner] = useState([]);
  useEffect(() => {
    if (type === 'recommend') {
      getRecommend().then((res) => {
        setWineList(res.data.results);
        setData(res.data);
      });
    }
    if (type === 'timeSale') {
      getTimeSale(BANNER_CODE.sub1).then(({ data }) => {
        setWineList(data.results);
        setData(data);
      });
      getMainBanner(BANNER_CODE.sub1).then(({ data }) => setTimeSaleBanner(data.results[0]));
    }
  }, [type]);

  return (
    data.serverCode === '200' && (
      <div>
        <Title title={title} subtitle={subtitle} />
        {type === 'timeSale' && (
          <BannerImg src={timeSaleBanner.thumbnailImageUrl} alt={timeSaleBanner.description} />
        )}
        <WineList type={type} wineList={wineList} listDirection={listDirection} />
      </div>
    )
  );
}
