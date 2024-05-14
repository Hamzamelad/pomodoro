import React, { FC } from "react";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import { icons } from "./icons";
import { useAppSelector } from "../app/hooks";
import { next } from "../utils";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";


const Controller: FC<any> = ({ restart, pause,resume, isRunning }) => {
  const focus = useAppSelector((state) => state.time.focus);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack spacing={2} direction="row">
      <IconButton
        className="w-16 h-16 border-gray-300"
        sx={{ border: 1, borderColor: "rgb(209 213 219)" }}
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 60 * focus);
          restart(time);
        }}
      >
        <icons.restart style={{ width: "100%", height: "100%" }} />
      </IconButton>
      <IconButton
        className="w-16 h-16"
        sx={{ border: 1, borderColor: "rgb(209 213 219)" }}
        onClick={isRunning ? pause : resume}
      >
        <icons.play style={{ width: "100%", height: "100%" }} />
      </IconButton>
      <IconButton
        className="w-16 h-16"
        sx={{ border: 1, borderColor: "rgb(209 213 219)" }}
        onClick={() => navigate(next(location.pathname))}
      >
        <icons.next style={{ width: "100%", height: "100%" }} />
      </IconButton>
    </Stack>
  );
};

export default Controller;
