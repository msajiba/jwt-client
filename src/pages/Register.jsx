import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import auth from '../firebase._init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loader from './Loader';
import {Link} from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


      if(loading){
        return <Loader></Loader>
      }

    const handleCreateUserSubmit = async(e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(email, password);
    };


    return (
        <>
            <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center ">
                    <Form onSubmit={handleCreateUserSubmit}>
                        <h4> Please Register </h4>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onBlur={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={e=>setPassword(e.target.value)} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p className="text-danger">
                            {error?.message}
                        </p>
                        <Button variant="primary" type="submit" className='w-100'>
                            Register
                        </Button>
                        <p> 
                            <Link to='/login' className='text-decoration-none'> Please Login </Link>
                        </p>
                    </Form>
               </div>
        </>
    );
};

export default Register;