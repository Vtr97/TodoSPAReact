import { Nav } from "react-bootstrap";


const NavTabs: React.FC = () =>{
    return (
        <Nav variant="tabs" className="flex-column flex-md-row" id ="tab-list">
            <Nav.Item>
                <Nav.Link eventKey="newest-pane">
                    <h6>Newest</h6>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavTabs;