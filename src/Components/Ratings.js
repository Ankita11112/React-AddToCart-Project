import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({rates, onClick, style}) => {
  return (
    <>
    { [...Array(5)].map((_,i) => (
            <span key={i} onClick={() => onClick(i)} style={style}>
               { rates > i ? (
                <AiFillStar fontSize="20px" color="#ffc042"/>
               ) : (
                <AiOutlineStar fontSize="20px" color="#ffc042"/>
               )}
            </span>
        )) }
    </>
  )
}

export default Ratings