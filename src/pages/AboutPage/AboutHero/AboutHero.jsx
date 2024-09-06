import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "./HeroStyle.css"

const AboutHero = () => {
  return (
    <div className='aboutSession'>
        <div className='aboutHolder'>
            <h2>Shop</h2>

            <div className='aboutItems'>
              <a href="/">
                <span>Home </span></a>
                <IoIosArrowForward style={{marginTop:"5px"}}/>
                Shop
            </div>
        </div>
    </div>
  )
}

export default AboutHero