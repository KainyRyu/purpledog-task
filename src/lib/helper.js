import dayjs from 'dayjs';

export const numberWithCommas = (num) => String(num).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

export const getTimeDiff = (timeSaleEndDate, setCount) => {
  let frame;
  const timeCounting = () => {
    const timeFormat = 'YYYY-MM-DD HH:mm:ss';
    const padZero = (num) => num.toString().padStart(2, '0');

    const today = dayjs();
    const end = dayjs(timeSaleEndDate, timeFormat);
    const diffTime = end.diff(today, 'second');

    const days = Math.floor(diffTime / 24 / 3600);
    const hours = padZero(Math.floor((diffTime - days * 86400) / 3600));
    const mins = padZero(Math.floor((diffTime - days * 86400 - hours * 3600) / 60));
    const seconds = padZero(Math.floor(diffTime - days * 86400 - hours * 3600 - mins * 60));

    frame = `${days && days + 'days '}${hours}:${mins}:${seconds} 남음`;
    setCount(frame);
    clearInterval(timeCounting);
  };
  const result = setInterval(timeCounting, 1000);
  return result;
};
