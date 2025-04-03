import React, {  } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Main: React.FC = () => {

    return (
        <main className="pt-4 pb-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={10}> 
                        {/* TODO: render the main content */}
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;
