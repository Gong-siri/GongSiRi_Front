import axiosInstance from './instance';

// 유저 매물 전체 리스트 반환
export const getRealty = async () => {
  return axiosInstance.get('/realty');
};

// 유저 판매용 매물 리스트 반환
export const getPinnedRealty = async () => {
  return axiosInstance.get('/realty/pinned');
};

export const updateRealty = async (id, name, pinned) => {
  return axiosInstance.put(`/realty/${id}`, { name, pinned });
};
