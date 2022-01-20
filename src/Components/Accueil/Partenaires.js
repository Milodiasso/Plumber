import Carousel from 'react-elastic-carousel';

// const images = [
//     './assets/draw_fairy.jpg',
//     './assets/fenetre.png',
//     './assets/vue_lac.jpg',
// ];

const Partenaires = () => {
    const items = [
        { id: 1, title: './assets/logo/Barrisol.svg.png', any: "Barrisol" , link : "https://barrisol.com/fr"    },
        { id: 2, title: './assets/logo/quickstep.png', any: "quickstep"   , link : "https://www.quick-step.lu/fr-lu"    },
        { id: 4, title: './assets/logo/knauff.svg', any: "knauff"         , link : "https://www.knauf-lux.lu/"    },
        { id: 5, title: './assets/logo/Zolpan-Logo-1.png', any: "Zolpan"  , link : "https://www.zolpan.fr/"  }
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },

    ]


    return (
        <div className="partenaires">
            <h3>NOS <b> PARTENAIRES </b></h3>
            <Carousel breakPoints={breakPoints} enableAutoPlay={false} >
                {items.map(item => <a href={item.link} > <img width="150px"  height="100px" key={item.id} src={item.title} alt={item.any} /></a>)}
            </Carousel>
        </div>
    )

}


export default Partenaires;
