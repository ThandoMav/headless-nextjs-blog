import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import { HiOutlineArrowSmR } from 'react-icons/hi';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">2023 Best Student Hacks</h3>
                <p className="text-slate-400 max-w-xl">Search your future opportunities with our categories</p>
            </div>

            <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                <a href="/" className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">All Categories
                  {/*  <HiOutlineArrowSmR className='align-middle' /> */}
                </a>
            </div>
          </div>
        </div>

                <div className="container">
                    <div className="grid md:grid-cols-4 sm:grid-cols-1 relative">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <div className="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                                    <div className="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                                      {/*  <HiOutlineArrowSmR className='align-middle' /> */}
                                    </div>

                                    <div className="content mt-6">
                                        <a href={`/category/${category.slug}`} className="title h5 text-lg font-medium hover:text-indigo-600">
                                        {category.name}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                        <div className="md:col-span-12 text-center">
                            <a href="/" className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                                All Categories
                              {/*  <HiOutlineArrowSmR className='align-middle' /> */}
                            </a>
                        </div>
                    </div>
                </div>
    </section>
  );
};

export default CategoriesSection;
