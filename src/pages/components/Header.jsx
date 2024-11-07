import React from 'react';

const Header = () => {
  return (
    <>
      <div className=" text-black absolute top-10 w-full">
        <ul className="list-none m-0 text-right gap-4">
          <li className="inline-block mr-20"><a href="/home" className="text-black hover:text-gray-300">Home</a></li>
          <li className="inline-block mr-20"><a href="/archive" className="text-black hover:text-gray-300">Archive</a></li>
          <li className="inline-block mr-20"><a href="/logout" className="text-black hover:text-gray-300">Log Out</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
