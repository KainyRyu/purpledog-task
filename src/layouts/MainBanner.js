import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { getMainBanner } from '../lib/apis';

const Container = Styled.div`
    // position: relative;
    // width: 100vw;
`;

const MainImg = Styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    z-index: -1;

`;

const GageBar = Styled.div`
    margin: 0 20px;
    position: absolute;
    bottom: 0;
    width: calc(100% - 40px);
    height: 2px;
    background-color: #ffffff;
    opacity: 0.3;
`;

export default function MainBanner() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getMainBanner('MAIN_TOP');
      setRes(res.data.results);
    };
    fetch();
  }, []);

  return (
    <Container>
      {res.map(({ bannerId, thumbnailImageUrl }) => {
        return <MainImg key={bannerId} src={thumbnailImageUrl} alt="main" />;
      })}
      <div style={{ position: 'relative', marginTop: '242px' }}>
        <GageBar>
          <div></div>
        </GageBar>
      </div>
    </Container>
  );
}
