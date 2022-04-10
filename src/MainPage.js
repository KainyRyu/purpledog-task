import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { getText, TEXT_KEY } from './lib/apis';
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
  margin-top: 268px;
  padding: 32px 15px 0 15px;
  width: calc(100% - 30px);
  height: 100%;
`;

function MainPage() {
  const [textGroup, setTextGroup] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const res = await getText('MAIN');
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
            subtitle={textGroup[TEXT_KEY.recommendProduct2Desc]?.content}
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
