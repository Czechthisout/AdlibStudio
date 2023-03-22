import React, { Component } from 'react';
import image1 from "../assets/bookshelf.jpg"
import image2 from "../assets/bookshelfgarden.jpg"
import image3 from "../assets/bookwcoffee.jpg"
import image4 from "../assets/bookshelf.jpg"
import "./DestinationStyles.css"

class DestinationData extends Component{
    render(){
        return(
            <div className="first-des">
                <div className="des-text">
                <h2>Volcano</h2>
                <p> 
                    one of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look...
                </p>
                </div>

                <div className="image">
                    <img alt="img" src={image1}/>
                    <img alt="img" src={image2}/>
                    <img alt="img" src={image3}/>
                </div>
            </div>
        )
    }
}

export default DestinationData;