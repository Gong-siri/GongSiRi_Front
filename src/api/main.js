import axiosInstance from './instance';

export const getProperties = async () => {
  return axiosInstance.get('/realty');
};

export const getSellProperties = async () => {
  return axiosInstance.get(`/realty/${id}`);
};
