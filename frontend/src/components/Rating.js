import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

function renderStars(value, checkValue){
    if (value >= checkValue){
        return <BsStarFill color={'#f8e825'}/>
    } else if (value >= (checkValue-0.5)){
        return <BsStarHalf />
    } else {
        return <BsStar />
    }
};

const Rating = ({ value, text}) => {
  return (
    <div className='rating'>
        <span>
            {renderStars(value, 1)}
        
        </span>
        <span>
         {renderStars(value, 2)}
        </span>
        <span>
           {renderStars(value, 3)}
        </span>
        <span>
            {renderStars(value,4)}
        </span>
        <span>
            {renderStars(value, 5)}
        </span>
        <span>{text && text}</span>
    </div>
  )
}

export default Rating