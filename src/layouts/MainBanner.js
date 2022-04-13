import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Styled from 'styled-components';
import { BANNER_CODE, getMainBanner } from '../lib/apis';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = Styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: -1;
`;

const MainImg = Styled.img`
    width: 100vw;
`;

const GageContainer = Styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 45px;
  width: 100vw;
`;

const GageBar = Styled.div`
  display: flex;
  left: 0;
  z-index: 5;
  height: 4px;
  width: calc(100vw - 40px);
  background-color: #ffffff;
  opacity: 0.3;
  border-radius: 2px;
`;
const GagePercentage = Styled.div`
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 20px;
  height: 4px;
  background-color: #ffffff;
`;

export default function MainBanner() {
  const [res, setRes] = useState([]);

  const dotSetting = (dots) => {
    let activeDot;
    React.Children.map(dots, (dot) => {
      const { className, children } = dot.props;
      if (className === 'slick-active') activeDot = children.props.children;
    });
    return (
      <GageContainer>
        <GageBar />
        <GagePercentage
          style={{
            width: `calc(${(activeDot / dots.length) * 100}% - 40px)`,
          }}
        />
      </GageContainer>
    );
  };

  const settings = {
    dots: true,
    appendDots: dotSetting,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    innerWidth: { innerWidth: window.innerWidth * res.length * 2 },
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await getMainBanner(BANNER_CODE.mainTop);
      setRes(res.data.results);
    };
    fetch();
  }, []);

  return (
    <Container className="main-banner">
      <Slider {...settings}>
        {res.map(({ bannerId, thumbnailImageUrl }) => {
          return (
            <div key={bannerId}>
              <MainImg className="banner-img" key={bannerId} src={thumbnailImageUrl} alt="main" />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}
