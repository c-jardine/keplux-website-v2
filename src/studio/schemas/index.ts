import {
  authorType,
  navbarType,
  pageType,
  postType,
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
} from './objects';

const objects = [
  linkType,
  navbarLinkType,
  codeTabType,
  codeTabGroupType,
  coverPhotoType,
  codeBlockType,
];

const documents = [
  navbarType,
  postType,
  seriesType,
  authorType,
  pageType,
  tagType,
];

export const schemaTypes = [...objects, ...documents];
