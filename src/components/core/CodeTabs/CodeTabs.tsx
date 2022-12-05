import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
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
    <Tabs>
      <TabList>
        {props.tabs.map((tab) => (
          <Tab
            key={tab._key}
            fontSize="sm"
            fontWeight="semibold"
            // Use important to avoid tracking the state of the currently
            // selected tab. This prevents the selected tab's border color
            // from being overridden on hover.
            _selected={{ borderColor: 'brand.500 !important' }}
            _hover={{ borderColor: 'brand.300' }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.tabs.map((tab) => (
          <TabPanel key={tab._key}>
            <CodeBlock {...tab.content} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default CodeTabs;
