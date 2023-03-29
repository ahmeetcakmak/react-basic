import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md">
        <NavbarBrand href='/'>Northwind Mağazası</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
           
            <NavItem>
              <NavLink href='/saveproduct' >Ürün Ekle
              </NavLink>
            </NavItem>
         <CartSummary></CartSummary>
         


          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;