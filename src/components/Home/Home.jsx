
import React from "react";
// import { Link } from "react-router-dom";

// Images
// import { Burger } from "../../assets/images";
import { Button, Badge, Container, Row, Col } from 'reactstrap'

const HomePage = () => {

    return ( 
        <>
            <Container fluid className="bg-light border">
                <Row>
                    <Col xs={6} lg={6}>
                        <div className="py-3 main">
                            <div className="container mx-auto">
                                <div className="grid grid-cols-2">
                                    <div className="py-4">
                                        <div className="section"> 
                                            <div className="flex flex-col hero-section">
                                                <h1 className="mb-3 text-5xl leading-8 text-left text-[#000] w-70 leading-49">We Provide <br />Architectural design <br /> and Construction</h1>
                                                <p className="text-[20px] text-[#c4c4c4] text-left">
                                                    More than 100 building and housing projects that we have built.
                                                    The building owner chose us over other contractors in Jakarta,
                                                    because our work is different</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div">Azad</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6}>
                        xs=6 md=4
                    </Col>
                </Row>

                {/* <Row className="bg-success text-bg-light">
                    <Col md={{ span: 8, offset: 2 }} className="bg-danger">{`md={{ span: 6, offset: 3 }}`}</Col>
                </Row> */}
            </Container>


        </>
    );
};

export default HomePage;
