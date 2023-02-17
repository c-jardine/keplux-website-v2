import {
  authorType,
  navbarType,
  pageType,
  postType,
  projectType,
  seriesType,
  tagType,
  commentType,
} from './documents';

import {
  codeBlockType,
  codeTabGroupType,
  codeTabType,
  coverPhotoType,
  linkType,
  navbarLinkType,
  photoType,
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
  photoType,
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
  commentType,
];

export const schemaTypes = [...objects, ...documents];
