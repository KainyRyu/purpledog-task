import React, { Fragment, useEffect, useState } from 'react';
import Styled from 'styled-components';
import Title from './Title';
import RecommendWine from 'components/RecommendWine';
import TimeSaleWine from 'components/TimeSaleWine';
import PopularWine from '../components/PopularWine';
import { BANNER_CODE, getMainBanner, getPopular, getRecommend, getTimeSale } from 'lib/apis';

const ListContainer = Styled.ul`
  margin: 0 0 ${({ type }) => (type === 'timeSale' ? '19px' : 0)} 0;

  display: flex;
  flex-flow: ${({ listDirection }) => (listDirection === 'vertical' ? 'column' : 'row')};
  ${({ type }) =>
    type === 'popular' ? 'flex-wrap: wrap; justify-content: space-between;' : 'flex-wrap: none;'};
  list-style: none;
  padding: 0;
  overflow: scroll;
`;

const BannerImg = Styled.img`
  width: 100%;
  margin-bottom: 15px;
`;
export default function WineListGroup({
  type,
  listDirection = 'horizontal',
  title = '',
  subtitle = '',
}) {
  const [wineList, setWineList] = useState();
  const [timeSaleBanner, setTimeSaleBanner] = useState();
  useEffect(() => {
    if (type === 'recommend') {
      getRecommend().then((res) => {
        setWineList(res.data.results);
      });
    }
    if (type === 'timeSale') {
      getTimeSale(BANNER_CODE.sub1).then(({ data }) => {
        setWineList(data.results);
      });
      getMainBanner(BANNER_CODE.sub1).then(({ data }) => setTimeSaleBanner(data.results[0]));
    }
    if (type === 'popular') {
      getPopular().then(({ data }) => {
        setWineList(data.results);
      });
    }
  }, [type]);

  return (
    <div>
      <Title title={title} subtitle={subtitle} type={type} />
      {timeSaleBanner && (
        <BannerImg src={timeSaleBanner.thumbnailImageUrl} alt={timeSaleBanner.description} />
      )}
      <ListContainer type={type} listDirection={listDirection}>
        {wineList &&
          wineList.map((product, idx) => (
            <Fragment key={idx}>
              {type === 'recommend' ? (
                <RecommendWine product={product} />
              ) : type === 'timeSale' ? (
                <TimeSaleWine product={product} />
              ) : type === 'popular' ? (
                <PopularWine product={product} />
              ) : (
                <></>
              )}
            </Fragment>
          ))}
      </ListContainer>
    </div>
  );
}
