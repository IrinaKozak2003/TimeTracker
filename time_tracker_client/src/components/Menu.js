import React from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const name = "Ivan";

const Menu = observer(() => {
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/main">TimeTracker</Navbar.Brand>
          <Navbar.Toggle />
          <NavDropdown title={name} id="basic-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item href="#action/3.1">Exit</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    );
  });
  

export default Menu;
