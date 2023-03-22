import Hero from "../Components/Hero";
import AboutImage from "../assets/phones.jpg";
import Navbar from "../Components/Navbar";
import React from 'react';

function Contact (){
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImage}
            title="Contact"
            /*text="Choose your favorite destination."
            buttonText="Travel Plan"
            url="/"*/
            btnClass="hide"
        />
        </>
    )
}

export default Contact;