import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.API_BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;