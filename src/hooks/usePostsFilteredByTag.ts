import React from 'react';
import { client } from '../studio/client';
import { postsByTagQuery } from '../studio/queries';
import { PostProps } from '../studio/types';
const usePostsFilteredByTab = (label: string) => {
  const [posts, setPosts] = React.useState<PostProps[]>([]);
  const [postsLoading, setPostsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!label) return;

    void (async () => {
      setPostsLoading(true);
      const posts: PostProps[] = await client.fetch(postsByTagQuery, { label });
      setPosts(posts);
      setPostsLoading(false);
    })();
  }, [label]);

  return [posts, postsLoading] as const;
};

export default usePostsFilteredByTab;
