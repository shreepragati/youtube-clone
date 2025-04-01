import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params:{
    maxResults: "51",
  },
  headers: {
    "x-RapidAPI-Key": "262e01192cmsh30cde149182381fp157adcjsnc62224153d2b",
    "x-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error in fetchApi:", error);
  }
};

export default fetchApi;
