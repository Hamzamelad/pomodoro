import * as React from "react";
import { Tabs } from "@mui/base/Tabs";
import { Tab as BaseTab, TabRootSlotProps, tabClasses } from "@mui/base/Tab";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { styled } from "@mui/system";

import { useAppDispatch } from "../app/hooks";
import { useAppSelector } from "../app/hooks";

// function Router(props: { children?: React.ReactNode }) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/focus">{children}</StaticRouter>;
//   }

//   return (
//     <MemoryRouter initialEntries={['/focus']} initialIndex={0}>
//       {children}
//     </MemoryRouter>
//   );
// }

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(["/focus", "/short-break", "/long-break"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <TabsList>
        <Tab value="/focus" to="/focus" slots={{ root: RouterLink }}>
          Inbox
        </Tab>
        <Tab
          value="/short-break"
          to="/short-break"
          slots={{ root: RouterLink }}
        >
          Drafts
        </Tab>
        <Tab value="/long-break" to="/long-break" slots={{ root: RouterLink }}>
          Trash
        </Tab>
      </TabsList>
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();
  return <RouteDisplay>Current route: {location.pathname}</RouteDisplay>;
}

export default function UnstyledTabsRouting() {
  return (
    <div>
      <MyTabs />
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const RouteDisplay = styled("p")`
  font-size: 0.75rem;
  color: ${grey[500]};
`;

const RouterLink = React.forwardRef(function RouterLink(
  props: TabRootSlotProps & { to: string },
  ref: React.Ref<HTMLAnchorElement>,
) {
  const { ownerState, ...other } = props;
  return <Link {...other} ref={ref} />;
});

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? grey[900] : grey[200]};
  `,
);
