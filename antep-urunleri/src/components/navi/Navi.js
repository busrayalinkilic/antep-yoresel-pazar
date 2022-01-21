import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCarousel,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div >
        <Navbar  light expand="md">
          <NavbarBrand href="/">
            {" "}
             <img
              src="https://imgyukle.com/f/2022/01/10/oNjPky.png"
              width={100}
              height={100}
            />{" "} 
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/busrayalinkilic/">
                  LinkedIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/busrayalinkilic">
                  GitHub
                </NavLink>
              
              </NavItem>

              <CartSummary></CartSummary>
              <NavItem>
                <NavLink href="https://imgyukle.com/f/2022/01/21/omsDxI.png">İletişim Bilgileri</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>

            
        

        <br></br>
        <br></br>
      </div>
    );
  }
}
