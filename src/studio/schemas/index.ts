import {
  author,
  comment,
  navbar,
  page,
  post,
  project,
  series,
  tag,
} from './documents';

import {
  codeBlock,
  codeTab,
  codeTabGroup,
  coverPhoto,
  link,
  navbarLink,
  photo,
  seo,
  seoMetadata,
  seoOpenGraph,
  seoOptions,
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
