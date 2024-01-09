import moment from 'moment';
import React from 'react';
import { CardProps } from '../../../public/interfaces';
import "./style.css";
import breakImage from '../../assests/break-image.png'

const Card = (props:CardProps)=>{
    const {bikeData} = props;
    const {thumb,title,frame_colors,serial,stolen_location,date_stolen,description} = bikeData
    return (<div className='card-content'>
        <div className='details'>
            <img alt={`${bikeData.title} img`} src={thumb || breakImage} className='thumb-image'/>
        </div>
        <div className='details'>
            <p className='bike-name normal-label'>{title}</p>
            <p className='normal-label'>Serial: {serial}</p>
            <p className='normal-label'>Primary Colors: {frame_colors?.join(' and ')}</p>
        </div>
        <div className='details'>
            <p className='normal-label'>Stolen: {date_stolen?moment(date_stolen).format('MMM DD, YYYY-h:mm A'):'NA'}</p>
            <p className='normal-label'>Location: {stolen_location}</p>
            <p className='normal-label'>Description: {description?description:'NA'}</p>
        </div>
    </div>)
}

export default Card;