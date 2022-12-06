import { Container, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { BlogCard } from '../../src/components/blog';
import { allPostsQuery, client } from '../../src/lib/studio';
import { PostProps } from '../../src/lib/studio/types';

const BlogHome: NextPage = (props: { posts: PostProps[] }) => {
  const { posts } = props;
  return (
    <Container maxW="6xl">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
        {posts.map((post: PostProps) => (
          <BlogCard key={post._id} {...post} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

/**
 * Get the blog post details for the slug contained in the route being visited.
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const posts: PostProps[] = await client.fetch(allPostsQuery);

  return {
    props: { posts },
  };
};

export default BlogHome;
