import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const CategoriesHacks = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Categories</h5>
    <ul className="list-none text-center mt-8">
        {categories.map((category, index) => (
          <li key={index} className="inline-block m-2">
            <Link href={`/category/${category.slug}`} className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">
            {category.name}
            </Link>
          </li>
         ))}
    </ul>
    </>
  );
};

export default CategoriesHacks;
