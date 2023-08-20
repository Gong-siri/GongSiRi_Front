import axiosInstance from './instance';

export const getRealty = async () => {
  return axiosInstance.get('/realty');
};
