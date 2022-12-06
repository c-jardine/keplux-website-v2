import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Code,
} from '@chakra-ui/react';
import { CodeBlock } from '../CodeBlock';
import { CodeTabsProps } from './CodeTabs.types';

/**
 * Creates a group of tabs. Specifically, this one only contains a CodeBlock in
 * the tab panel.
 * TODO: Try to make this component more generic. Maybe conditionally rendering
 * what's in the tab panel based on what the content is.
 * TODO: Figure out the 'parts' to create a separate Chakra-UI multipart theme.
 */
const CodeTabs = (props: CodeTabsProps) => {
  return (
    <Tabs position="relative" variant="unstyled" w="full">
      <TabList
        className="hideScrollbar"
        position="absolute"
        top={0.5}
        gap={2}
        w="full"
        px={8}
        overflowX="auto"
        borderWidth={0}
        zIndex={1}
      >
        {props.tabs.map((tab) => (
          <Tab
            key={tab._key}
            p={0}
            role="group"
            bg="gray.50"
            borderWidth={1}
            borderColor="brand.200"
            _selected={{ bg: 'brand.100' }}
          >
            <Code
              px={2}
              py={1}
              fontSize="xs"
              color="gray.600"
              letterSpacing="wide"
              bg="transparent"
            >
              {tab.label}
            </Code>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.tabs.map((tab) => (
          <TabPanel key={tab._key} px={0}>
            <CodeBlock {...tab.content} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default CodeTabs;
