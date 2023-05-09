import React from 'react'
import errorImg from './Image/errorImage.png'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Notfound = () => {
  return (
    <React.Fragment>
    <div className='text-center mt-5 mb-3'>
        <img src={errorImg} alt='404 Page Not Found' className='w-50' />
    </div>
    <Link to='/' className='btn btn-success rounded-pill w-25 m-auto d-flex justify-content-center align-items-center text-decoration-none'><Icon icon="eva:arrow-ios-back-outline" className='d-flex align-items-center'/> Go back to home</Link>
    

</React.Fragment>  
)
}

export default Notfound