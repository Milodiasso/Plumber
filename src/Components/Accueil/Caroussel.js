import React from 'react';
import { Zoom } from "react-slideshow-image";

const images = [];
images.push()
for (let i = 1; i < 20; i++) {
    const element = "./assets/m ("+i+").jpg"
    images.push(element)
}


const Caroussel = (prop) => {
    const zoomInProperties = {
        indicators: prop.indicator,
        scale: 1,
        transitionDuration: 500,
        arrows: prop.arrow
    }
    return (
        <div className="slide-container" style={{ width: "100%", }} >
            <Zoom {...zoomInProperties}  >
                {
                    images.map((each, index) => <img key={index} style={{ width: "65%", marginLeft : 'auto', marginRight : 'auto' }} src={each} alt={index} />)
                }
            </Zoom>
        </div>
    )

}


export default Caroussel;
