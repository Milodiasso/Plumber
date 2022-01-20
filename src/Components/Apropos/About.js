import { Col, Row } from 'react-bootstrap';
import { Zoom } from "react-slideshow-image";
import Partenaires from "../Accueil/Partenaires"

const images = [
    './assets/m (34).jpg',
    './assets/m (33).jpg',
    './assets/m (32).jpg',
];


const About = () => {

    const zoomInProperties = {
        indicators: false,
        scale: 1,
        transitionDuration: 800,
        arrows: true
    }

    return (
        <div className="about">
            {/* <div className="histoire">
                <h3>HISTOIRE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique unde dicta. Ipsa illum natus itaque assumenda obcaecati commodi, eos dolores sed dicta eum blanditiis, nobis aut quod praesentium dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci voluptatum sit beatae, reiciendis ipsam qui voluptatem, maiores excepturi id, error nulla molestiae iusto saepe consectetur amet similique. Nam, earum facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perspiciatis rerum voluptatum veritatis, dignissimos dolorum dolores et atque velit doloremque nisi voluptates id, sapiente commodi aliquid praesentium nobis? Ipsum, saepe!  </p>
            </div> */}
            <div className="bureau">
                <h3>NOS <b> BUREAUX </b></h3>
                <Zoom {...zoomInProperties}  >
                    {
                        images.map((each, index) => <img key={index} style={{ width: "100%", display: 'flex', justifyContent: 'center' }} src={each} alt={index} />)
                    }
                </Zoom>
            </div>
            <Row className="choisir">
                <h3>Nos <b> atouts</b></h3>
                <Col className="atout" md='6' sm='12'>
                    <h5>UNE EXPÉRIENCE CONFIRMÉE</h5>
                    <p>
                        Si l’entreprise est toute récente, elle n’est pas pour autant novice en matière de second œuvre. Avec bientôt 20 ans d’expérience dans les travaux de parachèvement, Stéphane Froesch connaît parfaitement les problématiques liées aux différents postes de travaux à l’intérieur d’une construction. Lui comme son associé, Dimitri Navarro, savent s’adapter aux besoins et attentes des clients.
                    </p>
                </Col>
                <Col className="atout" md='6' sm='12'>
                    <h5>UNE QUALITÉ IRRÉPROCHABLE</h5>
                    <p>
                        Notre credo : offrir la meilleure qualité possible à l’ensemble de nos clients ! Pour cela, nous garantissons un travail soigné à toutes les étapes.
                    </p>
                </Col>
                <Col className="atout" md='6' sm='12'>
                    <h5>DES BUDGETS ET DÉLAIS MAÎTRISÉS</h5>
                    <p><b>PLUMBER</b>, c’est aussi l’assurance d’un calendrier et d’un budget qui seront respectés, toujours dans l’optique de satisfaire au mieux nos clients.</p>
                </Col>
                <Col className="atout" md='6' sm='12'>
                    <h5>UNE RÉACTIVITÉ À TOUTE ÉPREUVE</h5>
                    <p>
                        Pour répondre au plus près de votre demande, nous menons une politique de veille importante : suivi de l’actualité du secteur, des évolutions, des nouvelles tendances, des lois et réglementations…
                    </p>
                </Col>
            </Row>
            <Partenaires />
        </div>
    )

}



export default About;