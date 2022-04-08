import Styled from 'styled-components';
import MainBanner from './layouts/MainBanner';
import Gnb from './layouts/Gnb';
import WineList from './layouts/WineList';
import { useEffect } from 'react';
import { getRecommend, getText } from './lib/apis';

const Container = Styled.div`
overflow-x:hidden;

`;

const BodyContainer = Styled.body`
  border: solid 1px red;
  border-radius: 15px 15px 0px 0px;
  background-color: #fff;
  margin-top: 268px;
  padding: 32px 15px 0 15px;
  width: calc(100% - 30px);
  height: 100%;
`;

function App() {
  useEffect(() => {
    getText('MAIN').then(({ data }) => console.log('get text ---- ', data.results));
    getRecommend().then(({ data }) => console.log('get Recommend ---- ', data.results));
  }, []);
  return (
    <Container className="App">
      <Gnb />
      <MainBanner />
      <BodyContainer>
        <WineList />
      </BodyContainer>

      {/* 
        <Gnb />
        <MainBanner/>
        <WineList way='horizontal'/>
        *****
        <MidBanner/>
        <WineList way='vertical'/>
        <CountryList/>
        <Promotion/>
        <PopularWineList/>
       */}
    </Container>
  );
}

export default App;
