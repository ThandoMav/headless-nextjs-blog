import { useState, useEffect  } from 'react'
import { FeaturedPosts, HacksPosts } from '../sections/index';
import { PostCard, CategoriesHacks, Categories,
         PostWidget, PostWidgetHacks, Layout, CategoriesSection
        } from '../components';
import { getPosts } from '../services';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiWifi, HiOutlineArrowSmR } from 'react-icons/hi';

export default function Home({ posts }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

   useEffect(() => {
     window.addEventListener('load', openModal);
   }, []);

   useEffect(() => {
     Aos.init({
     duration: 2500,
     delay: 400,
   });

 }, []);

  return (
  <Layout metaContent="home" title="home">
       <div className="container mx-auto px-10 mb-8">
           <FeaturedPosts />
           <CategoriesSection />

          <div className="container mt-16">
             <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
                   <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">2023 Best Student Hacks</h3>
                     <p className="text-slate-400 max-w-xl">Find your future opportunities with our categories</p>
                </div>

                        <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
                            <a href="/" className="btn btn-link text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                              All Categories
                               {/*  <HiOutlineArrowSmR className='align-middle' /> */}

                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 col-span-1">
                          <HacksPosts/>
                        </div>
                        <div className="lg:col-span-4 col-span-1">
                            <div className="sticky top-20">
                                <PostWidgetHacks />
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8">
                                    <li className="inline">
                                       <a href="/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600">
                                          <HiWifi className='h-4 w-4' />
                                      </a>
                                    </li>
                                    </ul>
                             <CategoriesHacks />
                            </div>
                        </div>
                    </div>
                </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
</Layout>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
