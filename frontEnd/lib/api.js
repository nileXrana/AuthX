import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://authx-8gqh.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  // Get token from localStorage or cookies
  const token = typeof window !== 'undefined' 
    ? localStorage.getItem('token') 
    : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: (data) => apiClient.post('/auth/signup', data),
  login: (data) => apiClient.post('/auth/login', data),
  getMe: () => apiClient.get('/auth/me'),
};

export default apiClient;
