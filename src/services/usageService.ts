
import apiClient from './apiClient';

const usageService = {
  getUsageList: () => {
    return apiClient.get('/usage');
  },
};

export default usageService;
