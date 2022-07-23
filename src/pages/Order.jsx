import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase._init';

const Order = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    
    useEffect(()=> {

        const getOrders = async() => {
            
            const url = 'https://desolate-dusk-49615.herokuapp.com/products';

           if(user){
                try{
                    const {data} = await axios.get(url, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                    setProducts(data);
                }
                catch(error){
                    if(error.response.status){
                        navigate('/login');
                    }
                }
           }
        }

        getOrders();

    }, []);


    return (
        <div>
            <h4> This is order page... {products.length} </h4>
        </div>
    );
};

export default Order;