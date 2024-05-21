// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://disease.sh/v3/covid-19';

export const fetchCountriesData = async () => {
  const response = await axios.get(`${API_BASE_URL}/countries`);
  return response.data;
};

export const fetchWorldWideData = async () => {
  const response = await axios.get(`${API_BASE_URL}/all`);
  return response.data;
};

export const fetchCasesFluctuations = async () => {
  const response = await axios.get(`${API_BASE_URL}/historical/all?lastdays=all`);
  return response.data;
};
