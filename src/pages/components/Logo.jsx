import React from 'react';
import logo from '../../images/logo.jpeg';

function Logo() {
    return (
        <div className="absolute top-0 left-0 m-4 flex items-center space-x-1">
            <img src={logo} alt="Description" className="w-16 h-16" />
            <span className="text-lg font-semibold">my-todo</span>
        </div>
    );
}

export default Logo;
