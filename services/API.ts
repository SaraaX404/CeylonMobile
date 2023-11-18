import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const getTokenFromLocalStorage = () => {
    console.log(AsyncStorage.getItem('token'))
    return AsyncStorage.getItem('token');
  };
  
  const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.3:3000/',
  });
  
  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await getTokenFromLocalStorage();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default axiosInstance