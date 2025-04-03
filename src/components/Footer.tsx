import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="pt-3 border-top">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <address>
                            <h6>Contact us</h6>
                            <p>
                                <strong>ToDo!</strong> <br />
                                Av. dos Estados, 5001 <br />
                                Santo André, SP
                            </p>
                        </address>
                    </Col>
                    <Col md={4}>
                        <h6>Sitemap</h6>
                        <ul id="sitemap" className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
