import axios from "axios";
const BASE_URL = "https://restcountries.com/v3.1";

export function getAllCountries(){
    return axios.get(`${BASE_URL}/all?fields=name,flags,capital,population,cioc,region`);
}

export function getCountryDetail(countryCode){
    return axios.get(`${BASE_URL}/alpha/${countryCode}`)
}
