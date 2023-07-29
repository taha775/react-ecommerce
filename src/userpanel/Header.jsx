import React from 'react'
import olx from '../components/assests/olx-logo.png';
import {AiFillCar} from 'react-icons/ai'
import {BsFillBuildingsFill} from 'react-icons/bs'
import './Header.css'
const Header = () => {
  return (
    <>
    <div className="container1">
        <div className="header1">

        <div className="logo"><img width={32+"px"} height={18.2+"px"}  src={olx} alt="" /></div>
        

        <div className="icons1">
            
            <AiFillCar/>
            <h6 className='xs'>Motors</h6>

            
           
            <BsFillBuildingsFill/>
            <h6 className='xs'>Property</h6>
            
        </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Header

