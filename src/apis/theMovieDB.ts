import axios from "axios";
import { API_TMDB, TOKEN_TMDB } from "../environments";

const apiTheMovieDB = axios.create({
    baseURL: API_TMDB,
    headers: {
        Authorization: `Bearer ${TOKEN_TMDB}`
    }
})

export default apiTheMovieDB