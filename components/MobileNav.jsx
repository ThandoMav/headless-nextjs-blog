import React, { useState, useEffect } from 'react';

import { getCategories } from '../services';

const MobileNav = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className='bg-gray-900 w-full h-full'>

      <ul className='h-full w-full flex flex-col justify-center items-center gap-y-8'>
      <a href='/'  data-aos='fade-down' data-aos-delay='1000'>

        <h4 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600">
            SF.
        </h4>
      </a>
        {categories.map((category, index) => (
          <li key={index}>
            <a className='link text-white text-xl px-10' href={`/category/${category.slug}`}>
              {category.name}
            </a>
          </li>
         ))}
      </ul>
    </div>
  );
};

export default MobileNav;
