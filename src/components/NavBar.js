import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/images/ducky-logo.png'
import styles from '../assets/styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand='lg' fixed='top'>
        <Container>
            <NavLink to='/'>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt='Ducky Logo' height='45'/>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto text-left'>
                    <NavLink 
                    // exact makes sure that it is the exact link (remove and click on links to see what happens)
                        exact
                        to='/' 
                        className={styles.NavLink} 
                        activeClassName={styles.Active}>
                        <i className="fa-solid fa-house-chimney"></i> Home
                    </NavLink>
                    <NavLink 
                        to='/signin' 
                        className={styles.NavLink} 
                        activeClassName={styles.Active}>
                        <i className="fa-solid fa-right-to-bracket"></i> Sign In
                    </NavLink>
                    <NavLink 
                        to='/signup' 
                        className={styles.NavLink} 
                        activeClassName={styles.Active}>
                        <i className="fa-solid fa-user-plus"></i> Sign Up
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar