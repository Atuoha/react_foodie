import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
               <Navbar bg="secondary" variant="dark">
                    <Navbar.Brand><NavLink className="link" to="/">Food Recipes</NavLink></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link><NavLink exact to="/" activeClassName="activeNav" className="link">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink activeClassName="activeNav" className="link" to="/submit">Add Recipe</NavLink></Nav.Link>
                    </Nav>           
                </Navbar>

                <div className="jumbotron bg-secondary text-white text-center">
                    <h1><strong>Food Recipes <i className="fa fa-check-circle"></i></strong></h1>
                    <p className="small-text">This is a little food Recipe programme written with React making use of LocalStorage as a medium for persisting data</p>
                </div>
            </div>
        )
    }
}

export default Header

