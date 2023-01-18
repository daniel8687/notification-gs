import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="App App-navigation-bar">
            <div className='links'>
                <Link className='link' to='/'>HOME</Link>
                <Link className='link' to='/user'>USER</Link>
                <Link className='link' to='/submission'>SUBMISSION</Link>
                <Link className='link' to='/logs'>LOGS</Link>
            </div>               
        </div>
    )
};

export default NavigationBar;