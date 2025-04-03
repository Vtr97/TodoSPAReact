import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <header className="border-bottom">
            <Navbar expand="md" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src="/todo-list.svg"
                            height="50px"
                            alt="ToDo Logo"
                        />
                        <span id="app-name" className="h2 align-middle">ToDo!</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
