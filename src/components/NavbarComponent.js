import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
     <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="flex justify-between">
          <Navbar.Brand className="order-1 mr-auto" href="#home">PgDekho.com</Navbar.Brand>
          <Nav className="order-2">
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
