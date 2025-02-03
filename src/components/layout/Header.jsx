// import react from 'react'
// import { useLocation } from "react-router-dom";
import { Button, Badge, Container, Row, Col } from 'reactstrap'

const Header = () => {

    return <div className="">
        <header>
            <Container>
                <Row className='bg-dark mb-4'>
                    <Col lg={8} className='flex justify-content-center align-content-center'>
                        <Badge
                            color="success"
                            pill
                        >
                            Success
                        </Badge>
                    </Col>
                    <Col lg={4}>2 of 2 <Button color='danger'>Theme</Button></Col>
                </Row>
            </Container>
        </header>
    </div>
};

export default Header;