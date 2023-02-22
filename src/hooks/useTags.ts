import React from 'react';
import { client } from '../studio/client';
import { getTagsQuery } from '../studio/queries';
import { TagProps } from '../studio/types';

const useTags = () => {
  const [tags, setTags] = React.useState<TagProps[]>([]);

  React.useEffect(() => {
    void (async () => {
      const allTags: TagProps[] = await client.fetch(getTagsQuery);
      setTags(allTags);
      console.log(allTags);
    })();
  }, []);

  return [tags];
};

export default useTags;
