import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCountryDetail } from '../API'
import image from "./../assets/World_map.png"
import "./countryDetails.css"

const CountryDetails = () => {
  const { code } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    getCountryDetail(code).then(result => {
      if (Array.isArray(result.data) && result.data.length > 0) {
        setDetail(result.data[0])
      }
    })
  }, [code])

  if (!detail) return <div>Loading...</div>

  const nativeNames = detail.name?.nativeName
    ? Object.values(detail.name.nativeName).map(n => n.common).join(", ")
    : "N/A"

  const currencies = detail.currencies
    ? Object.entries(detail.currencies)
        .map(([_, value]) => `${value.name} (${value.symbol})`)
        .join(", ")
    : "N/A"

  const languages = detail.languages
    ? Object.values(detail.languages).join(", ")
    : "N/A"

  const callingCodes = detail.idd
    ? detail.idd.suffixes.map(suffix => `${detail.idd.root}${suffix}`).join(", ")
    : "N/A"

  const tlds = detail.tld?.join(", ") ?? "N/A"

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
              <img src={detail.flags?.png} alt={detail.name?.common} />
            </div>
            <div className="name">
              <h1>{detail.name?.common}</h1>
            </div>
          </div>
          <div className="rightdiv">
           <h3 className='header2'>General Details</h3>
<div className="detail-row"><span className="detail-label">Capital</span><span className="detail-value">{detail.capital?.join(", ")}</span></div>
<div className="detail-row"><span className="detail-label">Native name</span><span className="detail-value">{nativeNames}</span></div>
<div className="detail-row"><span className="detail-label">Currency</span><span className="detail-value">{currencies}</span></div>
<div className="detail-row"><span className="detail-label">Population</span><span className="detail-value">{detail.population?.toLocaleString()} people</span></div>
<div className="detail-row"><span className="detail-label">Area</span><span className="detail-value">{detail.area?.toLocaleString()} sq km</span></div>
<div className="detail-row"><span className="detail-label">Major languages</span><span className="detail-value">{languages}</span></div>
<div className="detail-row"><span className="detail-label">Calling codes</span><span className="detail-value">{callingCodes}</span></div>
<div className="detail-row"><span className="detail-label">Alternate names</span><span className="detail-value">{detail.altSpellings?.join(", ")}</span></div>
<div className="detail-row"><span className="detail-label">Top-level domains</span><span className="detail-value">{tlds}</span></div>

<h3 className='header2'>Location Related Details</h3>
<div className="detail-row"><span className="detail-label">Region</span><span className="detail-value">{detail.region}</span></div>
<div className="detail-row"><span className="detail-label">Subregion</span><span className="detail-value">{detail.subregion}</span></div>
<div className="detail-row"><span className="detail-label">Latitude</span><span className="detail-value">{detail.latlng?.[0] ?? 'N/A'}</span></div>
<div className="detail-row"><span className="detail-label">Longitude</span><span className="detail-value">{detail.latlng?.[1] ?? 'N/A'}</span></div>
<div className="detail-row"><span className="detail-label">Time zones</span><span className="detail-value">{detail.timezones?.join(", ")}</span></div>


            <Link
              to={`/map/${code}`}
              state={{
                name: detail.name?.common,
                lat: detail.latlng?.[0],
                lng: detail.latlng?.[1]
              }}
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
