import axios from "axios";
import { API_RESTCOUNTRY } from "../environments";

const apiRestCountry = axios.create({
    baseURL: API_RESTCOUNTRY,
})

export default apiRestCountry