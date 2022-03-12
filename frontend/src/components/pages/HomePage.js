import {Button, Container, Navbar} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import logo from "../.././logo.svg"
import "../../css/home-page-styles.css"

const HomePage = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="home-page-navbar-brand">
                        <img
                            alt=""
                            src={logo}
                            width="30"  
                            height="30"
                            className="d-inline-block home-page-navbar-brand-logo"
                        />
                        Flash App
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <h2 className="home-page-no-set-message">No flash card sets have been created.</h2>
            <Button variant="outline-dark" className="home-page-create-set-button">Create Set</Button>
        </>
    )
}

export default HomePage;