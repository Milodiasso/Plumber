import React, { useState, useEffect } from 'react';
import Caroussel from './Caroussel';
import Presentation from './Presentation';
import Counter from './Counter';
import Partenaires from './Partenaires';

const Accueil = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 770);

        const updateMedia = () => {
            setDesktop(window.innerWidth > 770);
        };

        useEffect(() => {
            window.addEventListener("resize", updateMedia);
            return () => window.removeEventListener("resize", updateMedia);
        });
    return (
        <div className="Home">
            <Caroussel indicator={false} arrow={true}/>
            <Presentation desk={isDesktop}/>
            <Counter/>
            <Partenaires/>
        </div>
    )

}
    
    

export default Accueil;
