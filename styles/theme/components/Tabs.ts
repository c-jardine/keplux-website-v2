import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = helpers.definePartsStyle({
  root: {
    borderColor: 'whiteAlpha.400',
    color: 'whiteAlpha.600',
  },
  tab: {
    _hover: {
      color: 'whiteAlpha.900',
    },
    _active: {
      bg: 'transparent',
    },
    _selected: {
      color: 'whiteAlpha.900',
      fontWeight: 'bold',
    },
  },
  tabList: {
    color: 'red.500',
  },
  tabpanel: {},
});

const Tabs = helpers.defineMultiStyleConfig({ baseStyle });

export default Tabs;
