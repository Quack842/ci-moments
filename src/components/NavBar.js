import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/images/ducky-logo.png'
import styles from '../assets/styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { CurrentUserContext } from '../App'

const NavBar = () => {
    const currentUser = useContext(CurrentUserContext);

    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
        <>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin"
          >
            <i className="fas fa-sign-in-alt"></i>Sign in
          </NavLink>
          <NavLink
            to="/signup"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            <i className="fas fa-user-plus"></i>Sign up
          </NavLink>
        </>
    );
      
    return (
        <Navbar className={styles.NavBar} expand='lg' fixed='top'>
            <Container>
                <NavLink to='/'>
                    <Navbar.Brand>
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
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar