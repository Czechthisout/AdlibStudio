import React from "react"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity</p>
        <DestinationData/>
        </div>
    )
}

export default Destination;