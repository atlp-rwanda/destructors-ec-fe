import axiosInstance from '../utils/Api';

const SALE_URL = '/sales';
const token = localStorage.getItem('token') || '';

export const getSales = async () => {
  try {
    const response = await axiosInstance.get(`${SALE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sales:', error);
    throw error;
  }
};

export const getSalesDetails = async () => {
  try {
    const response = await axiosInstance.get('/sales-details', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sales:', error);
    throw error;
  }
};

export const updateSaleStatus = async (saleId, status) => {
  try {
    const url = `${SALE_URL}/${saleId}/status`;
    const response = await axiosInstance.patch(
      url,
      { newStatus: `${status}` },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(status);
    return response.data;
  } catch (error) {
    console.error('Error updating sale status:', error);
    throw error;
  }
};
