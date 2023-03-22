import Hero from "../Components/Hero";
import AboutImage from "../assets/notes.jpg";
import Navbar from "../Components/Navbar";
import React from 'react';

function About (){
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImage}
            title="About"
            /*text="Choose your favorite destination."
            buttonText="Travel Plan"
            url="/"*/
            btnClass="hide"
        />
        </>
    )
}

export default About;