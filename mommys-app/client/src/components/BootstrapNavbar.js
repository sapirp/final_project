import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
import NavbarBrand from 'reactstrap/lib/NavbarBrand';

class BootstrapNavbar extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.state({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="info" info expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand color="light" light href="/" color="light" light>אימל'ה</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">
                                        מעקב האכלה
                                </NavLink>
                                    <NavLink href="#">
                                        מעקב החתלה
                                </NavLink>
                                    <NavLink href="#">
                                        מעקב טיפת-חלב
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        )
    }

}

export default BootstrapNavbar