import React from 'react'
import avatar from '../images/avatar.png'
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='nav-mconatainer'>
        <div className='nav-incontainer'>
           <p>Gmail</p>
           <p>Images</p>
           <CgMenuGridO style={{fontSize:'25px'}}/>
           <img src={avatar} alt='avatarimg'/>
        </div>
    </div>
  )
}

export default Navbar