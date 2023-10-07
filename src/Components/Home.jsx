import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import { getAllCountries } from '../API'
import image from "./../assets/World_map.png"
import { Link } from 'react-router-dom'
import Input from '@mui/joy/Input';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Home = () => {

    const [countrieslist, setCountrieslist] = useState([])
    const [filteredCountriesList, setfilteredCountriesList] = useState([]);
    const [region, setRegion] = useState('');
    const [countryName, setcountryName] = useState('');

    const handlecountryNameChange = (event) => {
        setcountryName(event.target.value);
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
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
            if(region.length){
                    // step-1 : filter based on region.
                    filtered_countries = filtered_countries.filter(country => {
                    if (country.region === region) return true;
                    return false;
                });
            }
            if(countryName.length){
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
            <h1 className="titlehead">
                <img src={image} alt="" />
                <p>World</p>
                <img src={image} alt="" />
            </h1>
            <div className="filterSection">

                <h2>
                    Filter Countries By:
                </h2>

                <div><Input
                    placeholder="Country Name…"
                    value={countryName}
                    onChange={handlecountryNameChange}
                    sx={{
                        '&::before': {
                            display: 'none',
                        },
                        '&:focus-within': {
                            outline: '2px solid var(--Input-focusedHighlight)',
                            outlineOffset: '2px',
                        },
                    }}
                /></div>

                <div>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Continent</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={region}
                                onChange={handleRegionChange}
                                label="Continent"
                            >
                                <MenuItem value={''}>All</MenuItem>
                                <MenuItem value={'Asia'}>Asia</MenuItem>
                                <MenuItem value={'Europe'}>Europe</MenuItem>
                                <MenuItem value={'Africa'}>Africa</MenuItem>
                                <MenuItem value={'Americas'}>Americas</MenuItem>
                                <MenuItem value={'Oceania'}>Oceania</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

            </div>
            <div className="cardSection">
                {
                    filteredCountriesList.map((country, index) => {
                        return (
                            <Link to={`/countries/${country.alpha3Code}`}
                                key={country.alpha3Code}
                                style={{ textDecoration: 'none' }}
                            >
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