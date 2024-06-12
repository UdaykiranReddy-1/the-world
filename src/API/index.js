import axios from "axios";
const BASE_URL = "https://restcountries.com/v2";

export function getAllCountries(){
    return axios.get(`${BASE_URL}/all`);
}

export function getCountryDetail(countryCode){
    return axios.get(`${BASE_URL}/alpha/${countryCode}`)
}
