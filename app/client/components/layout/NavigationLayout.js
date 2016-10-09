import React from 'react'
import { Link } from 'react-router'

// importing some of react-bootstrap lib. Let's check it out!
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import './bootstrap.css';


const NavigationLayout = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>File Share</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to='/files'>
                                <NavItem>Все файлы</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/signup'>
                                <NavItem>Зарегистрироватся</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/signin'>
                                <NavItem>Войти</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        )
    }
})

export default NavigationLayout
