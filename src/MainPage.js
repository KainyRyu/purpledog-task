import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { getText, MAIN_CODE, TEXT_KEY } from './lib/apis';
import TopSection from './layouts/TopSection';
import MainBanner from './layouts/MainBanner';
import WineListGroup from 'layouts/WineListGroup';
import CountrySelectSection from 'layouts/CountrySelectSection';
import PromotionSection from 'layouts/PromotionSection';
import MidBanner from 'components/MidBanner';
import Gnb from 'layouts/Gnb';

const Container = Styled.div`
  overflow-x:hidden;
`;

const BodyContainer = Styled.div`
  border-radius: 15px 15px 0px 0px;
  background-color: #fff;
  margin-top: calc(100vw - 120px);
  padding: 2px 15px 80px 15px;
  width: 100vw;
  height: 100%;
`;

function MainPage() {
  const [textGroup, setTextGroup] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const res = await getText(MAIN_CODE.main);
      setTextGroup(res.data.results);
    };

    fetch();
  }, []);

  return (
    <Container className="App">
      <TopSection />
      <MainBanner />
      {textGroup && (
        <BodyContainer>
          <WineListGroup
            type="recommend"
            title={textGroup[TEXT_KEY.recommnedTitle]?.content}
            subtitle={textGroup[TEXT_KEY.recommendDesc]?.content}
          />
          <WineListGroup
            type="timeSale"
            listDirection="vertical"
            title={textGroup[TEXT_KEY.recommendProduct1]?.content}
            subtitle="와인을 정기 구독중인 회원님에게만 드려요."
          />
          <MidBanner />

          <CountrySelectSection
            title={textGroup[TEXT_KEY.countryWineTitle]?.content}
            subtitle={textGroup[TEXT_KEY.countryWineDesc]?.content}
          />

          <PromotionSection
            title={textGroup[TEXT_KEY.eventTitle]?.content}
            subtitle={textGroup[TEXT_KEY.eventDesc]?.content}
          />
          <WineListGroup
            type="popular"
            title={textGroup[TEXT_KEY.recommendProduct2Title]?.content}
            subtitle={textGroup[TEXT_KEY.recommendProduct2Desc]?.content}
          />
        </BodyContainer>
      )}
      <Gnb />
    </Container>
  );
}

export default MainPage;
