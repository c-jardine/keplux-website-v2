import {
  Box,
  Center,
  Image,
  Spinner,
  Stack,
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
  const [posts] = usePostsFilteredByTag(tags[currentTab]?.label);

  return (
    <Tabs onChange={(e) => setCurrentTab(e)} maxW="7xl" w="full">
      <TabList overflowX="scroll">
        {tags.map((tag) => (
          <Tab key={tag._key}>{tag.label}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tags.map((tag) => (
          <TabPanel key={tag._key} px={{ base: 4, md: 16 }}>
            {posts ? (
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={16}
                alignItems="flex-start"
                overflowX="scroll"
              >
                {posts.map((post) => (
                  <Box key={post._key} py={4} maxW={{ md: 'sm' }} w="full">
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
              </Stack>
            ) : (
              <Center my={8}>
                <Spinner color="brand.600" size="xl" />
              </Center>
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default BlogTabs;
