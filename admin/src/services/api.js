import axios from "axios";

const API = axios.create({

  baseURL: "https://mexi-backend.onrender.com/api"

});

export default API;