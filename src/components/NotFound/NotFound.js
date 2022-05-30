import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='pt-20'>
           <h1 className='text-6xl my-3'>404</h1>
           <h2 className='text-red-400 py-4 text-4xl'>Sorry the page not found</h2>
           <Link to='/home'>
       <button class="inline-flex text-white bg-green-400 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded text-lg">
        Go to Home
        </button>
       </Link>
        </div>
    );
};

export default NotFound;