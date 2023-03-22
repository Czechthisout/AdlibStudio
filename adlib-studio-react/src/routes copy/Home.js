import Hero from "../Components/Hero";
import heroImage1 from "../assets/Learn.jpg";
import Navbar from "../Components/Navbar";
import React from 'react';
import Destination from "../Components/Destinations";

function Home (){
    return(
        <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg={heroImage1}
            title="Your Journey Your Story"
            text="Choose your favorite destination."
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
        />
        <Destination/>
        </>
    )
}

export default Home;