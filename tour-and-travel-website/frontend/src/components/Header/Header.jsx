import React from 'react';
import {Container, Row, Button} from "reactstrap";
import {NavLink, Link} from "react-router-dom"
import logo from "../../../public/react.svg"

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
]

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className='nav_wrapper d-flex items-center justify-between'>
            <div className='logo'>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header