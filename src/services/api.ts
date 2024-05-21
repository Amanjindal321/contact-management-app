// src/services/api.ts
// Import the axios library for making HTTP requests
import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'https://disease.sh/v3/covid-19';

// Export the fetchCountriesData function
export const fetchCountriesData = async () => {
  const response = await axios.get(`${API_BASE_URL}/countries`);
  return response.data;
};

// Export the fetchWorldWideData function
export const fetchWorldWideData = async () => {
  const response = await axios.get(`${API_BASE_URL}/all`);
  return response.data;
};

// Export the fetchCasesFluctuations function
export const fetchCasesFluctuations = async () => {
  const response = await axios.get(`${API_BASE_URL}/historical/all?lastdays=all`);
  return response.data;
};
