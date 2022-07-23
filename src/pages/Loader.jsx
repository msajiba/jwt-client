import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <>
             <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
             </div>
        </>
    );
};

export default Loader;