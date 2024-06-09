import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_gaSA6v5OXWShcooSbIp9kQIJvyc2jgoZfeh1pgDO7Kk6W5Nu2YOVvcgUK7oX47wp';

export const fetchBreeds = async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
};

export const fetchCatByBreed = async (breedId) => {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return response.data.length ? response.data[0] : null;
  } catch (error) {
    throw new Error('Failed to fetch cat details');
  }
};
