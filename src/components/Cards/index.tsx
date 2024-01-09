import React from 'react';
import { BikeApiResponse } from '../../../public/interfaces';
import Card from '../Card';

const Cards = (props:any)=>{
    const {bikeData} = props;
    return bikeData &&
        bikeData.length > 0 &&
        bikeData.map((item:BikeApiResponse, index: number) => {
          return <Card bikeData={item} key={index} />;
        })
}
export default Cards;