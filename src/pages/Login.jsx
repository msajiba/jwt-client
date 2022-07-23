import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase._init';
import {Link} from 'react-router-dom';
import Loader from './Loader';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(loading){
        return <Loader></Loader>
      }

    const handleFormLoginSubmit = async(e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);

        const url = 'https://desolate-dusk-49615.herokuapp.com/login';

        if(user){
            const {data} = await axios.post(url, {email})
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken);
            }
            console.log(data);
        }
    }
    

    return (
        <>

               <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center ">
                    <Form onSubmit={handleFormLoginSubmit}>
                    <h4> Please Login </h4>
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
                            Login
                        </Button>
                    <p> 
                        <Link to='/register' className='text-decoration-none'> Please Register </Link>
                    </p>
                    </Form>
               </div>

        </>
    );
};

export default Login;