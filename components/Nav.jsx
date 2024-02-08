import React, { useState, useEffect } from 'react';

import { getCategories } from '../services';

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <nav>
      <ul className='flex gap-x-10'>
      <li>
        <a className='hover:text-accent transition' href="/about-us">
          About Us
        </a>
      </li>
        {categories.map((category, index) => (
          <li key={index}>
            <a className='hover:text-accent transition' href={`/category/${category.slug}`}>
              {category.name}
            </a>
          </li>
         ))}
      </ul>
    </nav>
  );
};

export default Nav;
