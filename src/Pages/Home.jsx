import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { TbCameraMinus } from "react-icons/tb";

const Home = () => {
  const [query,setQuery]=useState("");
  const navigate=useNavigate();

  const handleClick= async()=>{
    navigate('/result', { state: { query: query } });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className='home-container'>
        <div className='home-inner'>
            <h1>Google</h1>
            <div className='search'>
                <IoSearchOutline style={{fontSize:'18px'}}/>
                <input type='text' onChange={(e)=> setQuery(e.target.value)}   onKeyDown={handleKeyPress}/>
                <FaMicrophone style={{fontSize:'18px'}}/>
                <TbCameraMinus style={{fontSize:'18px'}}/>
            </div>
            <div className='home-btn'>
                <button className='btn1'>Google Search</button>
                <button className='btn1'>I'm feeling lucky</button>
                <button className='btn2' onClick={handleClick}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Home