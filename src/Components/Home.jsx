import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import { getAllCountries } from '../API'
import image from "./../assets/World_map.png"
import { Link } from 'react-router-dom'


const Home = () => {

    const [countrieslist, setCountrieslist] = useState([])
    const [filteredCountriesList, setfilteredCountriesList] = useState([]);
    const [region, setRegion] = useState('');
    const [countryName, setcountryName] = useState('');

    const handlecountryNameChange = (event) => {
        setcountryName(event.target.value);
    }

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    }

    // Used to fetch the Countries Object from API through Axios.
    useEffect(() => {
        getAllCountries().then((result) => {
            const countries = result.data;
            setCountrieslist(countries);
            setfilteredCountriesList(countries);
            // console.log(result);
        })
    }, [])


    // Used to Filter countries based on Entered values.
    useEffect(() => {
        if (region === '' && countryName === '') setfilteredCountriesList(countrieslist);
        else {
            let filtered_countries = countrieslist;
            if (region.length) {
                // step-1 : filter based on region.
                filtered_countries = filtered_countries.filter(country => {
                    if (country.region === region) return true;
                    return false;
                });
            }
            if (countryName.length) {
                // step-2 : filter based on name.
                filtered_countries = filtered_countries.filter(country => {
                    //convert both input name and country name to lowercase for matching
                    const lowerCaseCountry = country.name.toLowerCase();
                    if (lowerCaseCountry.includes(countryName.toLowerCase())) return true;
                    return false;
                });
            }
            setfilteredCountriesList(filtered_countries);
        }


    }, [region, countryName, countrieslist])

    return (
        <div className='mainSection'>
            <div className="header">
                <div className="titlehead">
                    <img src={image} alt="" />
                    <h3>World</h3>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="filterSection">

                <h2>
                    Filter Countries By:
                </h2>

                <div className="input-box">
                    <input
                        type="text"
                        value={countryName}
                        onChange={handlecountryNameChange}
                        placeholder="Country Name ..."
                    />
                </div>

                <div className="dropdown">
                    <select value={region} onChange={handleRegionChange}>
                        <option style={{ color: '#999' }} value="">Continents ...</option>
                        <option value="">All</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

            </div>
            <div className="cardSection">
                {
                    filteredCountriesList.map((country, index) => {
                        return (
                            <Link to={`/countries/${country.alpha3Code}`}
                                key={country.alpha3Code}
                                style={{ textDecoration: 'none' }} >
                                <CountryCard
                                    name={country.name}
                                    flagUrl={country.flags.png}
                                    capital={country.capital}
                                    // currency={country.currencies}
                                    population={country.population}
                                    key={index}
                                    className="countryCard"
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home