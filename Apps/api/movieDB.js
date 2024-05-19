import axios from "axios";
import { API_KEY } from "../../constants";

// fallback image poster
export const fallbackImagePoster =
  "https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
export const fallbackPersonImagePoster =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg";

// endpoints
const API_BASE_URL = "https://api.themoviedb.org/3";
const tredingMoviesEndpoint = `${API_BASE_URL}/trending/movie/day?api_key=${API_KEY}&&language=en-US`;
const upcomingMoviesEndpoint = `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&&language=en-US`;
const topRatedMoviesEndpoint = `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&&language=en-US`;
const searchMovieEndpoint = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&&language=en-US`;
// const collectionMovieEndpoint = `${API_BASE_URL}/search/collection?query=john%20wick&&api_key=${API_KEY}&&language=en-US`;

// Dynamic endpoint
const movieDetailsEndpoint = (id) =>
  `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&&language=en-US`;
const movieCreditsEndpoint = (id) =>
  `${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&&language=en-US`;
const similarMoviesEndpoint = (id) =>
  `${API_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&&language=en-US`;

const personDetailesEndpoint = (id) =>
  `${API_BASE_URL}/person/${id}?api_key=${API_KEY}&&language=en-US`;
const personMovieEndpoint = (id) =>
  `${API_BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}&&language=en-US`;
const collactionMovieEndpoint = (search) =>
  `${API_BASE_URL}/search/collection?query=john%20wick&&api_key=${API_KEY}&&language=en-US`;

export const imageOriginal = (path) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

const apiCall = async (endpoint, params) => {
  console.log(params);
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error ", err?.response?.data ? err.response.data : err);
    return {};
  }
};

export const fetchTrandingMovies = () => {
  return apiCall(tredingMoviesEndpoint);
};
export const fetchupcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
};
export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditsEndpoint(id));
};
export const fetchSimilarMovies = (id) => {
  return apiCall(similarMoviesEndpoint(id));
};
export const fetchPersonDetailes = (id) => {
  return apiCall(personDetailesEndpoint(id));
};
export const fetchPersonMovies = (id) => {
  return apiCall(personMovieEndpoint(id));
};
export const fetchSearchMovies = (params) => {
  return apiCall(searchMovieEndpoint, params);
};
export const fetchSearchCollection = (params) => {
  console.log(
    "collactionMovieEndpoint(params) : ",
    collactionMovieEndpoint(params)
  );
  return apiCall(collactionMovieEndpoint(params));
};
