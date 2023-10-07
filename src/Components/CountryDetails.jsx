import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getCountryDetail } from '../API';
import "./countryDetails.css"

const CountryDetails = () => {
  const {code} = useParams();
  const [detail , setDetail] = useState({});
  
  useEffect(()=>{
    getCountryDetail(code)
      .then(result => setDetail(result.data))
  },[code])

  return (
    <div className='country-detail-wrapper'>
      <div className="imgdiv">
        <img src={detail.flags?.png} alt={detail.name} />
      </div>
      <div className="detailcard">
        <h3>Name : {detail.name}</h3>
        <div>Population : {detail.population}</div>
        <div>Currency : {detail.currencies?.map(currency => currency.name).join(",")}</div>
        <div>Capital : {detail.capital}</div>
        {/* <div>Population : {detail.population}</div> */}

      </div>
    </div>
  )
}

export default CountryDetails