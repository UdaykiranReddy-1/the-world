import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { getCountryDetail } from '../API';
import image from "./../assets/World_map.png"
import "./countryDetails.css"

const CountryDetails = () => {
  const { code } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getCountryDetail(code)
      .then(result => setDetail(result.data))
  }, [code])

  return (
    <>
      <div className="header">
        <div className="titlehead">
          <img src={image} alt="" />
          <h3>World</h3>
          <img src={image} alt="" />
        </div>
      </div>
      <div className='country-detail-wrapper'>
        <div className="councard">
          <div className="leftdiv">
            <div className="imgdiv">
              <img src={detail.flags?.png} alt={detail.name} />
            </div>
            <div className="name">
              <h1>{detail.name}</h1>
            </div>
          </div>
          <div className="rightdiv">
            {/* <h3>Name : {detail.name}</h3> */}
            <h3>General</h3>
            <div>Capital : {detail.capital}</div>
            <div>Native name : {detail.nativeName}</div>
            <div>Currency : {detail.currencies?.map(currency => currency.name + `( ${currency.symbol} )`).join(",")}</div>
            <div>Population : {detail.population} in number</div>
            <div>Area : {detail.area} sqkm</div>
            <div>Major languages : {detail.languages?.map(lan => lan.name).join(", ")}</div>
            <div>Calling codes : {detail.callingCodes?.map(code => code).join(",")}</div>
            <div>Alternate names : {detail.altSpellings?.map(name => name).join(", ")}</div>
            <div>Toplevel domains : {detail.topLevelDomain?.map(name => name).join(", ")}</div>
            <div>Regional Blocs : {detail.regionalBlocs?.map(rb => rb.acronym).join(", ")}</div>


            <h3>Location</h3>
            <div>Region : {detail.region}</div>
            <div>Subregion : {detail.subregion}</div>
            <div>latitude : {detail.latlng?.['0'] ?? 'N/A'}</div>
            <div>longitude : {detail.latlng?.['1'] ?? 'N/A'}</div>
            <div>Time zones : {detail.timezones?.map(code => code).join(",")}</div>
            <Link
              to={`/map/${code}`}
              state={{ name: detail.name, lat: detail.latlng?.['0'], lng: detail.latlng?.['1'] }}
              className="locate-link"
            >
              View on World Map
            </Link>

          </div>
        </div>
      </div>
    </>

  )
}

export default CountryDetails
