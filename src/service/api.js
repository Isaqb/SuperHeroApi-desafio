import axios from "axios";

const api = axios.create({
  baseURL: "https://superheroapi.com/api.php/1957975361024299/",
});

export default api;