import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Styled from 'styled-components';
import { BANNER_CODE, getMainBanner } from '../lib/apis';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = Styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
`;

const MainImg = Styled.img`
    width: 100vw;
`;

export default function MainBanner() {
  const [res, setRes] = useState([]);

  const dotSetting = (dots) => {
    let activeDot;
    React.Children.map(dots, (dot) => {
      console.log(dot);
      const { className, children } = dot.props;
      if (className === 'slick-active') activeDot = children.props.children;
    });
    return (
      <div>
        <div className="gage-bar" />
        <div
          className="inner"
          style={{
            width: `calc(${(activeDot / dots.length) * 100}% - 40px)`,
          }}
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    appendDots: dotSetting,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    innerWidth: { innerWidth: window.innerWidth * res.length * 2 },
    dotsClass: 'gage-wrap',
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
          console.log(thumbnailImageUrl);
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
