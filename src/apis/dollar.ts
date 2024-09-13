import axios from "axios";
import { API_DOLLAR } from "../environments";

const apiDollar = axios.create({
    baseURL: API_DOLLAR,
})

export default apiDollar