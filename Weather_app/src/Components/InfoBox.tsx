import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";


export default function InfoBox({info}){
  const HOT_URL = "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bm55fGVufDB8fDB8fHww";
  const COLD_URL = "https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW55fGVufDB8fDB8fHww";

    return (
      <div className="InfoBox">
      <h1>WeatherInfo - {info.weather} </h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <p>Temperature = {info.temp}&deg;C </p>
                            <p>Humidity = {info.humidity} </p>
                            <p>Min Temp = {info.tempMin}&deg;C </p>
                            <p>Max = {info.tempMax}&deg;C </p>
                            <p>
                                The weather can be described as <i> {info.weather} </i> and feels like {info.feelsLike}&deg;C
                            </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
        </div>
      );
}