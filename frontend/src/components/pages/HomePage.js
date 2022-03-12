import {Container, Navbar} from "react-bootstrap"

const HomePage = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Flash App</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default HomePage;