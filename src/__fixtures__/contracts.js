// 임대계약 진행 상황 : UI로만 표시

const contracts = [
  {
    type: 'building',
    name: '서초동 파이낸스 빌딩 105호',
    status: 'new',
  },
  {
    type: 'building',
    name: '용답동 상도빌딩 204호',
    status: 'new',
  },
  {
    type: 'house',
    name: '대치동 은마아파트 19동',
    status: 'inReview',
  },
  {
    type: 'building',
    name: '서초동 파이낸스 빌딩 207호',
    status: 'inProgress',
  },
  {
    type: 'house',
    name: '대치동 은마아파트 17동',
    status: 'completed',
  },
  {
    type: 'building',
    name: '여의도동 코켐빌딩 105호',
    status: 'inReview',
  },
];

export default contracts;
