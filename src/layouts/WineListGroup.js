import React, { Fragment, useEffect, useState } from 'react';
import Styled from 'styled-components';
import { BANNER_CODE, getMainBanner, getPopular, getRecommend, getTimeSale } from 'lib/apis';
import Title from './Title';
import RecommendWine from 'components/RecommendWine';
import TimeSaleWine from 'components/TimeSaleWine';
import PopularWine from '../components/PopularWine';
import timeBanner from 'assets/banners/event@3x.png';

const ListContainer = Styled.ul`
  margin: 0 0 ${({ type }) => (type === 'timeSale' ? '19px' : 0)} 0;

  display: flex;
  flex-flow: ${({ listDirection }) => (listDirection === 'vertical' ? 'column' : 'row')};
  ${({ type }) =>
    type === 'popular' ? 'flex-wrap: wrap; justify-content: space-between;' : 'flex-wrap: none;'};
  list-style: none;
  padding: 0;
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimeSaleContainer = Styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const TimeSaleBannerImg = Styled.img`
  width: 100%;
`;

const TimeSaleText = Styled.div`
  position: absolute;
  left: 20px;
  bottom: calc(50% - 24px);
  width: 100%;
  display: flex;
  align-contents: center;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: #ffffff;
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
        <TimeSaleContainer>
          {/* 해당 배너 이미지가 아니어서 xd에서 이미지 다운 받음. */}
          <TimeSaleBannerImg src={timeBanner} alt={timeSaleBanner.description} />
          <TimeSaleText>
            타임특가로 퍼플독
            <br />
            추천와인을 즐겨보세요!
          </TimeSaleText>
        </TimeSaleContainer>
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
