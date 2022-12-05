import { authorType, navbarType, postType, seriesType } from './documents';
import {
  codeBlockType,
  coverPhotoType,
  linkType,
  navbarLinkType,
  pageType,
  tagType,
} from './objects';

const objects = [
  linkType,
  pageType,
  navbarLinkType,
  tagType,
  coverPhotoType,
  codeBlockType,
];

const documents = [navbarType, postType, seriesType, authorType];

export const schemaTypes = [...objects, ...documents];
