import React from 'react';
import { client } from '../studio/client';
import { postsByTagQuery } from '../studio/queries';
import { PostProps } from '../studio/types';
const usePostsFilteredByTab = (label: string) => {
  const [posts, setPosts] = React.useState<PostProps[]>([]);

  React.useEffect(() => {
    if (!label) return;

    void (async () => {
      const posts: PostProps[] = await client.fetch(postsByTagQuery, { label });
      setPosts(posts);
    })();
  }, [label]);

  return [posts];
};

export default usePostsFilteredByTab;
