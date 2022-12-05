import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CodeBlock } from '../CodeBlock';
import { CodeTabsProps } from './CodeTabs.types';

const CodeTabs = (props: CodeTabsProps) => {
  return (
    <Tabs>
      <TabList overflowX="auto">
        {props.tabs.map((tab) => (
          <Tab key={tab._key}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {props.tabs.map((tab) => (
          <TabPanel key={tab._key}>
            <CodeBlock {...tab.content[0]} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default CodeTabs;
