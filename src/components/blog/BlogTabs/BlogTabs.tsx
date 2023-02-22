import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { usePostsFilteredByTag, useTags } from '../../../hooks';
import { urlForImage } from '../../../studio/urlForImage';
const BlogTabs = () => {
  const [currentTab, setCurrentTab] = React.useState<number>(0);
  const [tags] = useTags();
  const [posts, postsLoading] = usePostsFilteredByTag(tags[currentTab]?.label);

  if (!tags) {
    return <Spinner color="brand.600" size="xl" />;
  }

  return (
    <Container maxW="7xl" w="full">
      <Heading as="h2" color="whiteAlpha.800">
        Tutorials by topic
      </Heading>
      <Tabs onChange={(e) => setCurrentTab(e)} mt={8}>
        <TabList>
          {tags.map((tag) => (
            <Tab key={tag._id}>{tag.label}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {tags.map((tag) => (
            <TabPanel key={tag._id} px={{ base: 4, md: 16 }}>
              {posts && !postsLoading ? (
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
                  {posts.map((post, index) => (
                    <Box key={index} py={4} w="full">
                      <Image
                        src={urlForImage(post.coverPhoto).url()}
                        alt={post.coverPhoto.caption}
                      />
                      <Text color="whiteAlpha.800" fontWeight="semibold">
                        {post.title}
                      </Text>
                      <Text color="whiteAlpha.600" fontSize="sm">
                        {post.excerpt}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              ) : (
                <Center my={8}>
                  <Spinner color="brand.600" size="xl" />
                </Center>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};
export default BlogTabs;
