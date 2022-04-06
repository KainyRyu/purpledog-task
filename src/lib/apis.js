const { default: axios } = require('axios');

export const getMainBanner = async (bannerCodeId) => {
  try {
    const res = axios.get(
      `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/banner/bannerCodeId/${bannerCodeId}`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getText = async (textGroupCode) => {
  try {
    const res = axios.get(
      `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/text/textGroupCode/${textGroupCode}`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getRecommend = async () => {
  try {
    const res = axios.get(
      `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/product/selectTimeSaleWine`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const getTimeSale = async () => {
  try {
    const res = axios.get(
      'https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/product/selectTimeSaleWine',
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const getPopular = async () => {
  try {
    const res = axios.get(
      `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/:{{version}}/product/selectPopularWine`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
