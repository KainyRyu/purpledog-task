const { default: axios } = require('axios');

export const MAIN_CODE = {
  main: 'MAIN',
};

export const BANNER_CODE = {
  mainTop: 'MAIN_TOP', // 메인 슬라이드 배너
  sub1: 'MAIN_SUB_1', // 타임특가 배너
  sub2: 'MAIN_SUB_2', // 인증샷 배너
};

export const TEXT_KEY = {
  countryWineTitle: 'COUNTRY_WINE_TITLE',
  countryWineDesc: 'COUNTRY_WINE__DESCRIPTION',
  eventDesc: 'EVENT_DESCRIPTION',
  eventTitle: 'EVENT_TITLE',
  recommendDesc: 'PERSONAL_RECOMMEND_DESCRIPTON',
  recommnedTitle: 'PERSONAL_RECOMMEND_TITLE',
  recommendProduct1: 'RECOMMEND_PRODUCT_1_TITLE',
  recommendProduct2Title: 'RECOMMEND_PRODUCT_2_TITLTE',
  recommendProduct2Desc: 'RECOMMEND_PRODUCT_2_DESCRIPTION',
};

export const getMainBanner = async (bannerCodeId) => {
  const fetch = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/banner/bannerCodeId/${bannerCodeId}`,
  );
  return fetch;
};

// MAIN
export const getText = async (textGroupCode) => {
  const fetch = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/text/textGroupCode/${textGroupCode}`,
  );
  return fetch;
};

export const getRecommend = async () => {
  const fetch = await axios.get(
    'https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/product/subscriptionWineRecommend',
  );
  return fetch;
};
export const getTimeSale = async () => {
  const fetch = await axios.get(
    'https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/product/selectTimeSaleWine',
  );
  return fetch;
};
export const getPopular = async () => {
  const fetch = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/product/selectPopularWine`,
  );
  return fetch;
};
