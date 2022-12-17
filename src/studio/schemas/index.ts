import {
  authorType,
  navbarType,
  pageType,
  postType,
  projectType,
  seriesType,
  tagType,
} from './documents';

import {
  codeBlockType,
  codeTabGroupType,
  codeTabType,
  coverPhotoType,
  linkType,
  navbarLinkType,
  seoMetadataType,
  seoOpenGraphType,
  seoOptionsType,
  seoType,
} from './objects';

const objects = [
  linkType,
  navbarLinkType,
  codeTabType,
  codeTabGroupType,
  coverPhotoType,
  codeBlockType,
  seoType,
  seoMetadataType,
  seoOptionsType,
  seoOpenGraphType,
];

const documents = [
  navbarType,
  postType,
  seriesType,
  authorType,
  pageType,
  tagType,
  projectType,
];

export const schemaTypes = [...objects, ...documents];
