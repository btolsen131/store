import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const Slider = () => {
  return (
    <container>
        <arrow>
            <BsFillArrowLeftCircleFill />
        </arrow>
        <arrow>
            <BsFillArrowRightCircleFill/>
        </arrow>
    </container>
  )
}

export default Slider