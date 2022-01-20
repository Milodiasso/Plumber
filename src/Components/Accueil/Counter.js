import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup';

const VisibilitySensor = require('react-visibility-sensor').default;


const Counter = () => {



    return (


        <Row className="info_exp">
            <Row className="count-animation"  >
                <Col lg='4' md='4' sm='6' xs='12'>
                    <div className="experience">
                        <b>16</b>
                    </div>
                </Col>
                <Col lg='6' md='8' sm='6' xs='12' className="text_experience" >
                        <div className="exp">
                            <h2>ANS D'EXPERIENCE</h2>
                        </div>
                        <div className="exp">
                            <h4>DANS L'AMÉNAGEMENT INTÉRIEUR</h4>
                        </div>
                </Col>
            </Row>
                <Row className="d-flex justify-content-between align-items-center chiffres" >
                    <Col lg='3' md='6' sm='12'  xs='12' className="zoom-in-zoom-out" >

                        <CountUp
                            start={0}
                            end={16}
                            duration={1.5}
                            separator=" "
                            decimals={0}
                            decimal=","
                        // prefix="Compte "
                        // suffix=" left"
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={(isVisible) => isVisible ? start() : false}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>PROJETS</p>

                    </Col >
                    <Col lg='3' md='6' sm='12' xs='12' className="zoom-in-zoom-out">

                        <CountUp
                            start={0}
                            end={11}
                            duration={1.5}
                            separator=" "
                            decimals={0}
                            decimal=","
                        // prefix="Compte "
                        // suffix=" left"
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={(isVisible) => isVisible ? start() : false}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>CLIENTS</p>

                    </Col >
                    <Col lg='3' md='6' sm='12' xs='12' className="zoom-in-zoom-out">

                        <CountUp
                            start={0}
                            end={6}
                            duration={1.5}
                            separator=" "
                            decimals={0}
                            decimal=","
                        // prefix="Compte "
                        // suffix=" left"
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={(isVisible) => isVisible ? start() : false}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>COLLABORATEURS</p>

                    </Col >
                    <Col lg='3' md='6' sm='12' xs='12' className="zoom-in-zoom-out">

                        <CountUp
                            start={0}
                            end={3}
                            duration={1.5}
                            separator=" "
                            decimals={0}
                            decimal=","
                        // prefix="Compte "
                        // suffix=" left"
                        >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={(isVisible) => isVisible ? start() : false}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>VÉHICULES</p>

                    </Col >
                </Row>
        </Row>
    )
}


export default Counter
