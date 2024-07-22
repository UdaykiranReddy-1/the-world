import * as React from 'react';
import { FaBuildingFlag } from "react-icons/fa6"
import { BsPeopleFill } from "react-icons/bs"
// import {GrCurrency} from "react-icons/gr"

// Function to format the population number
const formatPopulation = (population) => {
  if (population >= 1e9) {
    return (population / 1e9).toFixed(1) + 'B'; // Billions
  } else if (population >= 1e6) {
    return (population / 1e6).toFixed(1) + 'M'; // Millions
  } else if (population >= 1e3) {
    return (population / 1e3).toFixed(1) + 'K'; // Thousands
  } else {
    return population; // Less than 1,000
  }
};

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
            <BsPeopleFill className="icon" /> &nbsp; {population ? formatPopulation(population) : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}