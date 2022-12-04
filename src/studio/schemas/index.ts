import { authorType, navbarType, postType, seriesType } from './documents';
import { linkType, navbarLinkType, pageType, tagType } from './objects';

const objects = [linkType, pageType, navbarLinkType, tagType];

const documents = [navbarType, postType, seriesType, authorType];

export const schemaTypes = [...objects, ...documents];
