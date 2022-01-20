import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Presentation = (prop) => {
    console.log(prop)

    return (

        <div className="presentation">
            <Col className="titre" xs='12'>
                <h2 className='title'> PLUMBER <b>FRANCE & LUXEMBOURG</b> </h2>
                <p className="intro">
                    Vous recherchez un spécialiste du second œuvre pour votre appartement, votre maison ou vos locaux professionnels situés en France ou au Luxembourg ? Faites appel à PLUMBER, entreprise experte des travaux de parachèvement : plafonnage, cloisonnage, pose de planchers et de menuiseries intérieures ou encore peintures.
                </p>
            </Col >

            <Row className="articles" >
                <Col className="article1" lg='4' md='5' xs='12'>
                    <h5> <b>Notre </b> expérience</h5>
                    <p>
                        Fort de 16 années d’expérience dans le métier, Stéphane Froesch vous apportera toute son expertise pour cette étape importante de la construction ou de la rénovation d’un bâtiment. Avec son associé, Dimitri Navarro, ils mettront tout en œuvre pour coordonner les différents travaux en respectant les budgets et délais impartis.
                        Toujours réactive, PLUMBER est synonyme de travaux de qualité. Son objectif : donner entière satisfaction au client !
                    </p>
                    <img src="../assets/travaux.jpg" alt="fentre" />
                </Col>
                {prop.desk ?
                    <Col className="article2" lg='4' md='5' xs='12'>

                        <img src="/assets/m (31).jpg" alt="fentre" />
                        <h5>Nos <b>valeurs </b></h5>
                        <p>
                            Nous offrons la meilleure qualité possible à l’ensemble de nos clients ! Pour cela, nous garantissons un travail soigné à toutes les étapes, ainsi que le respect des délais et des budgets imposés.
                        </p>
                    </Col> :
                    <Col className="article2" lg='4' md='5' xs='12'>
                        <h5>Nos <b>valeurs </b></h5>
                        <p>
                            Nous offrons la meilleure qualité possible à l’ensemble de nos clients ! Pour cela, nous garantissons un travail soigné à toutes les étapes, ainsi que le respect des délais et des budgets imposés.
                        </p>
                        <img src="/assets/m (31).jpg" alt="fentre" />
                    </Col>}


                <Col className="button-info" lg='3' md='2' xs='12'>
                    <button className="btn_btn dark-border"><b>En savoir plus</b> </button>
                </Col>
            </Row>
        </div>
    )
}


export default Presentation
