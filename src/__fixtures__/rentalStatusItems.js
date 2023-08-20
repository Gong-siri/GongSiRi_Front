// 임대현황 : UI로만 표시

const rentalStatusItems = [
  {
    type: 'building',
    name: '여의도동 코켐빌딩 103호',
    rentalStartDate: new Date('2023-06-13'),
    rentalExpirationDate: new Date('2023-08-29'),
    progressPoint: 5,
  },
  {
    type: 'building',
    name: '용답동 상도빌딩 203호',
    rentalStartDate: new Date('2023-07-13'),
    rentalExpirationDate: new Date('2023-09-20'),
    progressPoint: 24,
  },
  {
    type: 'building',
    name: '양재동 은성 빌딩 107호',
    rentalStartDate: new Date('2023-08-13'),
    rentalExpirationDate: new Date('2023-11-20'),
    progressPoint: 92,
  },
];

export default rentalStatusItems;
