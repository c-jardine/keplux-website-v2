import { authorType, navbarType, postType, seriesType } from './documents';
import {
  codeBlockType,
  codeTabGroupType,
  codeTabType,
  coverPhotoType,
  linkType,
  navbarLinkType,
  pageType,
  tagType,
} from './objects';

const objects = [
  linkType,
  pageType,
  tagType,
  navbarLinkType,
  codeTabType,
  codeTabGroupType,
  coverPhotoType,
  codeBlockType,
];

const documents = [navbarType, postType, seriesType, authorType];

export const schemaTypes = [...objects, ...documents];
