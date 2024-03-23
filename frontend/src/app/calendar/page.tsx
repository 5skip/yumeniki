import { HomePage } from './home-page';
import { PostList } from './post-list';
import { Flex, Spacer } from '@yamada-ui/react';

const Home = () => {
  return (
    <div>
      <Flex>
        <PostList />
        <Spacer />
        <HomePage />
      </Flex>
    </div>
  )
}

export default Home;