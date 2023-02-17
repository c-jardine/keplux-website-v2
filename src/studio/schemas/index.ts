import {
  author,
  navbar,
  page,
  post,
  project,
  series,
  tag,
  comment,
} from './documents';

import {
  codeBlock,
  codeTabGroup,
  codeTab,
  coverPhoto,
  link,
  navbarLink,
  photo,
  seoMetadata,
  seoOpenGraph,
  seoOptions,
  seo,
} from './objects';

const objects = [
  link,
  navbarLink,
  codeTab,
  codeTabGroup,
  coverPhoto,
  codeBlock,
  photo,
  seo,
  seoMetadata,
  seoOptions,
  seoOpenGraph,
];

const documents = [navbar, post, series, author, page, tag, project, comment];

export const schemaTypes = [...objects, ...documents];
