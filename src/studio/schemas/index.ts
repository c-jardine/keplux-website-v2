import { authorType, navbarType, postType, seriesType } from './documents';
import {
  linkType,
  navbarLinkType,
  pageType,
  partOfSeriesType,
  tagType,
} from './objects';

const objects = [linkType, pageType, navbarLinkType, tagType, partOfSeriesType];

const documents = [navbarType, postType, seriesType, authorType];

export const schemaTypes = [...objects, ...documents];
