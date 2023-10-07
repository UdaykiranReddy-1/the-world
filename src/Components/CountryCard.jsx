import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {FaBuildingFlag} from "react-icons/fa6"
import {BsPeopleFill} from "react-icons/bs"
// import {GrCurrency} from "react-icons/gr"

export default function CountryCard({name,flagUrl,capital, population}) {

  return (
    <Card sx={{ maxWidth: 345 , width:220 , height:300}}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={flagUrl}
      />
      <CardContent>
          <h3 className="title long-name">
          {name}
          </h3>
        
        <Typography variant="body2" color="text.secondary" component="span">
          <div className="details">
            <div className="capital">
            <FaBuildingFlag className='icon'/>{capital} 
            </div>
            {/* <div className="currency">
             <GrCurrency className='icon'/>{currency?.map((curr)=> curr.name).join(',')}
            </div> */}
            <div className="population">
            <BsPeopleFill className="icon"/>{population}
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}