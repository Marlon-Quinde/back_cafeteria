import axios from "axios";
import { API_JSONPLACEHOLDER } from "../environments";

const apiJsonPlaceHolder = axios.create({
    baseURL: API_JSONPLACEHOLDER,
})

export default apiJsonPlaceHolder