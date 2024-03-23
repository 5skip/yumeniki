import { HomePage } from './home-page';
import { PostList } from './post-list';
import { Flex, Spacer } from '@yamada-ui/react';

const Home = () => {
  return (
    <div className="w-2/3 bg-white md:rounded-lg md:shadow-md md:p-10 my-10">
      <div className="flex flex-col-reverse lg:flex-row">
        <PostList />
        <Spacer />
        <HomePage />
      </div>
    </div>
  )
}

export default Home;