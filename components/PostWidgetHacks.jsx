import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import moment from 'moment';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidgetHacks = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <>
    <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Recent post</h5>
     {relatedPosts.map((post, index) => (
       <div key={index} className="flex items-center mt-8">
        <img src={post.featuredImage.url} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="POST WIDGET IMAGE" />
        <div className="ml-3">
            <Link href={`/post/${post.slug}`} className="font-semibold hover:text-indigo-600">{post.title}</Link>
            <p className="text-sm text-slate-400">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
       </div>
     ))}
    </>
  );
};

export default PostWidgetHacks;
