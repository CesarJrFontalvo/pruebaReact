import React from 'react';
import { Button, Container, Form,  Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';

// import { useForm } from '../hooks/useForm';
import '../index.css'

const NavbarBlock = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // const [formValues, handleInputChange] = useForm({
    //     searchText: ''
        
    // });

    // const { searchText} = formValues;

    // const handleSearch = (e)=>{
    //     e.preventDefault();
    //     dispatch(listSearch(searchText))
      
    // }

 

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
  return (
    <Container  className="mt-3 sticky-top" >
            <Navbar  id="Navbar" variant="dark" expand="lg" >
        <Container fluid>
            <Navbar.Brand href="home">
                {/* <img id="block-icon" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1644873384/Proyecto2/blockmaster_Mesa_de_trabajo_1_vjpe0r.png"  alt="google button" /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                
                className="me-auto my-2 my-lg-1"
                style={{ maxHeight: '100px' , color:'white'}}
                navbarScroll
            >
               
            </Nav>

            <Form className="d-flex " >
               
                <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
            </Form>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>  
  ) 
};

export default NavbarBlock;
