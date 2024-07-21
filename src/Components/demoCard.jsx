import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryDetail } from '../API';
import "./demo.css"

const CountryDetails = () => {
    const { code } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        getCountryDetail(code)
            .then(result => setDetail(result.data))
    }, [code])

    return (
        <div className="wrapper">
            <div className="country-info-card">
                <div className="left">
                    <img src={detail.flags?.png} alt={detail.name} />
                    <p>{detail.name}</p>
                </div>
                <div className="right">
                    <h2>{detail.name}</h2>
                    <p>Capital: {detail.capital}</p>
                    <p>Population: {detail.population}</p>
                    {/* Add more details as needed */}
                </div>
            </div>
        </div>
    )
}

export default CountryDetails