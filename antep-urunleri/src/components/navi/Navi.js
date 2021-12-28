import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
          <NavbarBrand href="/">Antep Yöresel Pazar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/busrayalinkilic/">LinkedIn</NavLink>
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
      </div>
    );
  }
}
