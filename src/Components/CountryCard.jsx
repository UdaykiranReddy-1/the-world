import * as React from 'react';
import { FaBuildingFlag } from "react-icons/fa6"
import { BsPeopleFill } from "react-icons/bs"
// import {GrCurrency} from "react-icons/gr"

export default function CountryCard({ name, flagUrl, capital, population }) {

  return (
    <div class="card">
      <img class="card-media" src={flagUrl} alt="Country Flag" />
      <div class="card-content">
        <h3 class="title long-name">{name}</h3>
        <div class="details">
          <div class="capital">
            <FaBuildingFlag className='icon' /> &nbsp; {capital ? capital : "N/A"}
          </div>
          <div class="population">
            <BsPeopleFill className="icon" /> &nbsp; {population ? population : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}