import axios from "axios";
import pokemonAPI from "./pokemonAPI";

export const fetchAPI = async (page, limit = 20, offset = 20) => {
  return pokemonAPI
    .get("/", {
      params: {
        limit: limit,
        offset: page * offset - offset, //starting index of each page for pagination
      },
    })
    .then((res) => {
      return res.data.results;
    })
    .then((results) => {
      //async array of each individual pokemon's data
      return Promise.all(results.map((res) => axios.get(res.url)));
    });
};
