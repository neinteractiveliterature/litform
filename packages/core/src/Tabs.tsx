import { useState, ReactNode, useCallback, useMemo, JSX } from 'react';
import classNames from 'classnames';

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

export function useTabs(tabs: TabProps[], initialTabId?: string): UseTabsResult {
  const [selectedTab, setSelectedTab] = useState(initialTabId ?? tabs[0].id);

  return { tabs, selectedTab, setSelectedTab };
}

export function useTabsWithRouter(
  tabs: TabProps[],
  basePath: string,
  location: { hash?: string | null | undefined },
  history: { replace: (newLocation: string) => unknown },
  defaultTabId?: string,
): UseTabsResult {
  const setSelectedTab = useCallback(
    (tabId: string) => {
      history.replace(`${basePath}#${tabId}`);
    },
    [history, basePath],
  );

  const tabFromHash = useMemo(
    () => tabs.find((tab) => `#${tab.id}` === location.hash),
    [location.hash, tabs],
  );

  return {
    tabs,
    selectedTab: tabFromHash ? tabFromHash.id : (defaultTabId ?? tabs[0].id),
    setSelectedTab,
  };
}

export type TabListProps = {
  tabs: TabProps[];
  selectedTab?: string;
  setSelectedTab: (selectedTab: string) => void;
  className?: string;
  tabClassName?: string;
  selectedTabClassName?: string;
};

export function TabList({
  tabs,
  selectedTab,
  setSelectedTab,
  className,
  tabClassName,
  selectedTabClassName,
}: TabListProps): JSX.Element {
  return (
    <ul className={classNames('nav nav-tabs', className)}>
      {tabs.map(({ id, name }) => (
        <li key={id} className="nav-item">
          <a
            className={classNames('nav-link', tabClassName, {
              active: id === selectedTab,
              [selectedTabClassName ?? '']: id === selectedTab,
            })}
            href={`#${id}`}
            onClick={(event) => {
              event.preventDefault();
              setSelectedTab(id);
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export type TabBodyProps = {
  tabs: TabProps[];
  selectedTab?: string;
};

export function TabBody({ tabs, selectedTab }: TabBodyProps): JSX.Element {
  return (
    <>
      {tabs.map(({ id, renderContent }) => (
        <div id={id} key={id} className={classNames({ 'd-none': id !== selectedTab })}>
          {renderContent()}
        </div>
      ))}
    </>
  );
}

export function Tabs({
  tabs,
  selectedTab,
  ...otherProps
}: TabBodyProps & TabListProps): JSX.Element {
  return (
    <>
      <TabList tabs={tabs} selectedTab={selectedTab} {...otherProps} />
      <TabBody tabs={tabs} selectedTab={selectedTab} />
    </>
  );
}
