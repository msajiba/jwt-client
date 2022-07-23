import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../firebase._init';

const Header = () => {

    const [user] = useAuthState(auth);
 

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="#">JWT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/order">Order</Nav.Link>
                        </Nav>

                        <Nav>
                            
                            {user? 
                                    <button className='btn btn-outline-danger'
                                            onClick={()=>signOut(auth)}> 
                                            <Link to='/login' className='text-decoration-none text-white'> Sign Out</Link>
                                    </button>        
                                 : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;