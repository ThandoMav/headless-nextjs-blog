import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowSmR } from 'react-icons/hi';

const HacksPostCard = ({ post }) => (
  <>
  <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden mb-2">
      <div className="lg:flex relative">
          <div className="relative md:shrink-0">
              <img className="h-full w-full object-cover lg:w-52 lg:h-56" src={post.featuredImage.url} alt="student hacks images" />
          </div>
          <div className="p-6 flex flex-col lg:h-56 justify-center">
              <a href={`/post/${post.slug}`} className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">
              {post.title}
              </a>
              <div className="my-auto">
                  <p className="text-slate-400 mt-3">{post.excerpt}</p>
              </div>
              <div className="mt-4">
                  <a href={`/post/${post.slug}`} className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                     Read More
                  {/*  <HiOutlineArrowSmR className='align-middle' /> */}
                  </a>
              </div>
          </div>
      </div>
  </div>
</>
);

export default HacksPostCard;
