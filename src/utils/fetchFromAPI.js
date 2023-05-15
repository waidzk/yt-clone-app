import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c63a93bdb8msh925c836e5a92872p1105fajsn0d5fbaaeeeb7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
