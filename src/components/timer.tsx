import { useTimer } from "react-timer-hook";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { icons } from "./icons";
import CircularProgress from "@mui/joy/CircularProgress";

import { getMinutes } from "../utils";
import TimeProvider from "../contexts/time-context";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setFocus } from "../features/time/timeSlice";
import { useLocation } from "react-router-dom";

import Time from "./time";
import Controller from "./controller";
import { useEffect } from "react";
import UnstyledTabsRouting from "./tabs";
import { next } from "../utils";
import { getRestartMinutes } from "../utils";



export default function Timer({ expiryTimestamp = getMinutes(2) }: any) {
  const timeState = useAppSelector((state) => state.time);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
    });

  useEffect(() => {
    const time = new Date();
    time.setSeconds(
      time.getSeconds() + getRestartMinutes(timeState, location.pathname),
    );
    restart(time);
    pause();
  }, [location, timeState]);

  return (
    <TimeProvider>
      <div className="w-full flex justify-center mt-16">
        <div className="">
          <UnstyledTabsRouting />
          <Time value={75} minutes={minutes} seconds={seconds} />
          <div className="flex justify-center">
            <Controller
              isRunning={isRunning}
              start={start}
              pause={pause}
              restart={restart}
              resume={resume}
            />
          </div>
        </div>
      </div>
    </TimeProvider>
  );
}
