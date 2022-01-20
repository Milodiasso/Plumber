import { useState, useEffect } from 'react';
import { Zoom } from "react-slideshow-image";
import { Row, Col } from 'react-bootstrap';


const produits = [
    { title: "Cloisons", src: ["./assets/m (25).jpg", "./assets/m (26).jpg"], number: '01', intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui repudiandae fugiat odit, voluptas ipsum", text: "La conception et la pose de cloisons font partie des spécialités de PLUMBER. Pour séparer les espaces, à la maison ou en entreprise (open spaces, salles de réunion), de multiples solutions existent en fonction de vos attentes : cloisons en plâtre, cloisons vitrées, cloisons mobiles, cloisons amovibles, panneaux anti-bruit, etc. Avec nos partenaires SAB Diffusion, Litt\n" },

    { title: "Plafonds", src: ["./assets/m (27).jpg", "./assets/m (28).jpg"], number: '02', intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui repudiandae fugiat odit, voluptas ipsum", text: " PLUMBER est le spécialiste des plafonds tendus et suspendus en tout genre. Pour ces faux plafonds, les possibilités sont vastes tant au niveau des matériaux que du design : dalles minérales, plafond métallique, plafond bois… En fonction de l’objectif recherché, notre équipe saura vous conseiller au mieux sur le type de plafond suspendu le plus adapté : plafond acoustique, plafond froid, panneaux rayonnants, etc. Notre partenaire exclusif Barrisol® Spécialiste de la fabrication de toile tendue depuis maintenant 40 ans, vous offre la possibilité d'aménager votre intérieur comme vous le souhaitez. \n" },

    { title: "Planchers", src: ["./assets/m (29).jpg", "./assets/m (30).jpg"], number: '03', intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui repudiandae fugiat odit, voluptas ipsum", text: " PLUMBER est également experte pour la pose de revêtements de sols. Le choix du type de revêtement doit se faire en fonction de l’usage auquel il est destiné et donc, surtout, selon la pièce qui va le recevoir. En matière de sols, PLUMBER assure la pose de parquet massif, contrecollé (parquet flottant) ou stratifié. Faux plancher, faux plancher technique et faux plancher en bois ou en sulfate de calcium font également partie des prestations proposées. La pose de revêtements PVC est également envisageable avec notre partenaire QUICK-STEP®.\n" },

    { title: "Menuiserie intérieure", src: ["./assets/m (32).jpg", "./assets/m (33).jpg"], number: '04', intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui repudiandae fugiat odit, voluptas ipsum", text: "En s’appuyant sur un réseau constitué des menuisiers les plus qualifiés, PLUMBER pose vos éléments de menuiserie intérieure. Selon vos besoins, nous proposons notamment portes (portes en bois, portes en verre, portes métalliques), bureaux sur-mesure, placards (placards intégrés, placards sur-mesure). N’hésitez pas à nous solliciter pour tout autre élément de menuiserie intérieure ! \n" },

    { title: "Peintures", src: ["./assets/m (33).jpg"], number: '05', intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui repudiandae fugiat odit, voluptas ipsum", text: " Spécialiste de tous types de travaux de peinture, PLUMBER vous assure d’un rendu final soigné. En matière de peinture intérieure avec notre partenaire exclusif Zolpan® (mate, satinée, brillante), nous nous occupons des plafonds, murs et enduits décoratifs. La pose de fibre de verre murale est également possible avec nos ouvriers qualifiés.\n" }
]

const Produits = () => {



    const [isDesktop, setDesktop] = useState(window.innerWidth > 770);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 770);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const zoomInProperties = {
        indicators: isDesktop ? true : false,
        scale: 1,
        transitionDuration: 800,
        arrows: false
    }


    return (
        isDesktop ?
            <div className="produits">

                {produits.map((item, key) =>
                    ((key + 1) % 2 > 0) ?
                        <Row key={key} className="produit">
                            <Col md='6' className="image p-5 mb-5  " >
                                <Zoom {...zoomInProperties}   >
                                    {
                                        item.src.map((each, index) => <img key={index} src={each} alt={item.title} className="rounded" />)
                                    }
                                </Zoom>
                            </Col>
                            <Col md='6' className="paragraphe p-2">
                                <div className="big_number">
                                    <h1> <b> {item.number}</b></h1> <span className="titre_produit"> <h3>{item.title}</h3> </span>
                                </div>
                                <div className="text"> {/* <p>{item.intro}</p> */} <p> {item.text} </p> </div>
                            </Col>
                        </Row>
                        : <Row key={key} className="produit">
                            <Col className="paragraphe p-2" md='6'> <div className="big_number"> <h1><b>   {item.number}</b></h1> <span className="titre_produit"> <h3>{item.title}</h3> </span> </div> <div className="text"> {/* <p>{item.intro}</p> */} <p> {item.text} </p> </div> </Col>
                            <Col className="image p-5 mb-5" md='6'> <Zoom {...zoomInProperties}   >
                                {
                                    item.src.map((each, index) => <img className="rounded" key={index} src={each} alt={index} style={{ alignContent: 'flex-end' }} />)
                                }
                            </Zoom></Col>
                        </Row>)}

                <div className="extra">
                    <h4>
                        <b> Contactez-nous pour tout projet et nous vous conseillerons avec plaisir !</b>
                    </h4>
                </div>
            </div> :
            <div className="produits">
                {produits.map((item, key) =>
                    <Row key={key} className="produit" >
                        <Col sm='12' className="paragraphe p-2">
                            <div className="big_number">
                                <h1> <b> {item.number}</b></h1>
                                <span className="titre_produit">
                                    <h3>{item.title}</h3>
                                </span>
                            </div>
                            <div className="text">
                                <p> {item.text} </p>
                            </div>
                        </Col>
                        <Col sm='12' className='image  p-2'>
                            <Zoom {...zoomInProperties}   >
                                {
                                    item.src.map((each, index) => <img key={index} className="rounded" src={each} alt={item.title} />)
                                }
                            </Zoom>
                        </Col>

                    </Row>
                )}
                <div className="extra">
                    <h4>
                        <b> Contactez-nous pour tout projet et nous vous conseillerons avec plaisir !</b>
                    </h4>
                </div>
            </div>
    )
}


export default Produits