import React, { useContext, useEffect } from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Button } from 'react-bootstrap/lib/inputgroup';


const Menu = observer(() => {
  const {user} = useContext(Context);
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/main">TimeTracker</Navbar.Brand>
          <Navbar.Toggle />
         <Button onClick={}>AddUser</Button>
          <NavDropdown title={user.user.userName} id="basic-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item href="#action/3.1">Exit</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    );
  });
  

export default Menu;
