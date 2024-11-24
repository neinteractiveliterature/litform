import { ReactNode } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type TabProps = {
    id: string;
    name: string;
    renderContent: () => ReactNode;
};
export type UseTabsResult = {
    tabs: TabProps[];
    selectedTab: string;
    setSelectedTab: (tabId: string) => void;
};
export declare function useTabs(tabs: TabProps[], initialTabId?: string): UseTabsResult;
export declare function useTabsWithRouter(tabs: TabProps[], basePath: string, location: {
    hash?: string | null | undefined;
}, history: {
    replace: (newLocation: string) => unknown;
}, defaultTabId?: string): UseTabsResult;
export type TabListProps = {
    tabs: TabProps[];
    selectedTab?: string;
    setSelectedTab: (selectedTab: string) => void;
    className?: string;
    tabClassName?: string;
    selectedTabClassName?: string;
};
export declare function TabList({ tabs, selectedTab, setSelectedTab, className, tabClassName, selectedTabClassName, }: TabListProps): JSX.Element;
export type TabBodyProps = {
    tabs: TabProps[];
    selectedTab?: string;
};
export declare function TabBody({ tabs, selectedTab }: TabBodyProps): JSX.Element;
export declare function Tabs({ tabs, selectedTab, ...otherProps }: TabBodyProps & TabListProps): JSX.Element;
