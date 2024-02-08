import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { HacksPostCard } from '../components';
import { getHacksPosts } from '../services';


const HacksPost = () => {
  const [hacksPosts, setHacksPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getHacksPosts().then((result) => {
      setHacksPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-[30px]">
        {dataLoaded && hacksPosts.map((post, index) => (
          <HacksPostCard key={index} post={post} />
        ))}
    </div>
  );
};

export default HacksPost;
