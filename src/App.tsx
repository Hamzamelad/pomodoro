import { useState, useEffect } from "react";
import Timer from "./components/timer";
import { IconButton } from "@mui/material";
import { icons } from "./components/icons";
import { useTimer } from "react-timer-hook";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { MemoryRouter } from "react-router-dom";

import { getMinutes } from "./utils";
import { useAppSelector } from "./app/hooks";
import { StaticRouter } from "react-router-dom/server";
import SettingsMenu from "./components/settings";



function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/focus">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/focus']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function App() {
  const focus = useAppSelector((state) => state.time.focus)
  const time = getMinutes(focus)

  return (
    <Router>
      <div className="">
        <div className="absolute top-10 right-10">
          <SettingsMenu />
        </div>
        <div className="">
          <Timer expiryTimestamp={time} />
        </div>
      </div>
    </Router>


  );
}

export default App;
