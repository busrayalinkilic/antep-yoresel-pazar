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
      <div>
        <Navbar color="light" light expand="md">
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
            </Nav>
          </Collapse>
        </Navbar>

            <div align="center"><img src="https://imgyukle.com/f/2022/01/20/oGBxBn.png" width={400} height={400}></img></div>
        

        <br></br>
        <br></br>
      </div>
    );
  }
}
