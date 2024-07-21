import * as React from 'react';
import { FaBuildingFlag } from "react-icons/fa6"
import { BsPeopleFill } from "react-icons/bs"
// import {GrCurrency} from "react-icons/gr"

export default function CountryCard({ name, flagUrl, capital, population }) {

  return (
    <div className="card">
      <img className="card-media" src={flagUrl} alt="Country Flag" />
      <div className="card-content">
        <h3 className="title long-name">{name}</h3>
        <div className="details">
          <div className="capital">
            <FaBuildingFlag className='icon' /> &nbsp; {capital ? capital : "N/A"}
          </div>
          <div className="population">
            <BsPeopleFill className="icon" /> &nbsp; {population ? population : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}