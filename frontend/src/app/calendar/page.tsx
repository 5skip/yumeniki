"use client";

import { useState } from 'react';
import { HomePage } from './home-page';
import { PostList } from './post-list';
import { Flex, Spacer } from '@yamada-ui/react';

const Home = () => {
  const [day, setDay] = useState<String>("");

  const handleClick = (day: String) => {
    setDay(day);
  };

  return (
    <div className="w-2/3 bg-white md:rounded-lg md:shadow-md md:p-10 my-10">
      <div className="flex flex-col-reverse lg:flex-row">
        <PostList day={day}/>
        <Spacer />
        <HomePage handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Home;