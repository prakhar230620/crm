import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch dashboard data');
  }
};