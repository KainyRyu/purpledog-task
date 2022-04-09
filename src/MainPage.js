import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { getText, TEXT_KEY } from './lib/apis';
import MainBanner from './layouts/MainBanner';
import Gnb from './layouts/Gnb';
import ListContainer from 'layouts/ListContainer';
import MidBanner from 'components/MidBanner';

const Container = Styled.div`
  overflow-x:hidden;
`;

const BodyContainer = Styled.div`
  border: solid 1px red;
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
      <Gnb />
      <MainBanner />
      {textGroup && (
        <BodyContainer>
          <ListContainer
            type="recommend"
            title={textGroup[TEXT_KEY.recommnedTitle]?.content}
            subtitle={textGroup[TEXT_KEY.recommendDesc]?.content}
          />
          <ListContainer
            type="timeSale"
            listDirection="vertical"
            title={textGroup[TEXT_KEY.recommendProduct1]?.content}
            subtitle={textGroup[TEXT_KEY.recommendProduct2Desc]?.content}
          />
          <MidBanner />
          <h1>{textGroup[TEXT_KEY.countryWineTitle]?.content}</h1>
          <h3>{textGroup[TEXT_KEY.countryWineDesc]?.content}</h3>

          <h1>{textGroup[TEXT_KEY.eventTitle]?.content}</h1>
          <h3>{textGroup[TEXT_KEY.eventDesc]?.content}</h3>

          <h1>{textGroup[TEXT_KEY.recommendProduct2Title]?.content}</h1>
          <h3>{textGroup[TEXT_KEY.recommendProduct2Desc]?.content}</h3>
        </BodyContainer>
      )}

      {/* 
        <MidBanner/>
        <WineList way='vertical'/>
        <CountryList/>
        <Promotion/>
        <PopularWineList/>
       */}
    </Container>
  );
}

export default MainPage;
