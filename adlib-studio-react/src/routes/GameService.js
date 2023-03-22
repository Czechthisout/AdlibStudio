import Hero from "../Components/Hero";
import AboutImage from "../assets/bookwindow.jpg";
import Navbar from "../Components/Navbar";
import React from 'react';

function GameService (){
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImage}
            title="Game Service"
            /*text="Choose your favorite destination."
            buttonText="Travel Plan"
            url="/"*/
            btnClass="hide"
        />
        </>
    )
}

export default GameService;