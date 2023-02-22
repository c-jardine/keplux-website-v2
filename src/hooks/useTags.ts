import React from 'react';
import { client } from '../studio/client';
import { getTagsQuery } from '../studio/queries';
import { TagProps } from '../studio/types';

const useTags = () => {
  const [tags, setTags] = React.useState<TagProps[]>([]);

  React.useEffect(() => {
    void (async () => {
      const t: TagProps[] = await client.fetch(getTagsQuery);
      setTags(t);
    })();
  }, []);

  return [tags];
};

export default useTags;
