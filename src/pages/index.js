import React from 'react'
import Navbar from '../components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import {useState} from 'react';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infosection'
import { homeObjOne,homeObjTwo,homeObThree } from '../components/infosection/Data';
import Services from '../components/Services'
import Footer from '../components/Footer'
const Home = () => {

const [isOpen,setIsOpen]=useState(false);

const toggle=()=>{
    setIsOpen(!isOpen)
}

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/>
     <HeroSection/>
     <InfoSection {...homeObjOne}/>
     <InfoSection {...homeObjTwo}/>
     <Services/>

     <InfoSection {...homeObThree}/>
     <Footer />
    </>
  );
  
}

export default Home