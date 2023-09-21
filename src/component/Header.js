import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#home">KBO_Bingo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#team">팀</Nav.Link>
          <Nav.Link href="#players">선수</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="검색"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">검색</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
