import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "../app/hooks";
import { useLocation } from "react-router";
import { getRestartMinutes } from "../utils";

type timeProps = {
  value?: number;
};

const Time: FC<any> = ({ value, minutes, seconds }) => {
  const location = useLocation();
  const timeState = useAppSelector((state) => state.time);

  return (
    <div className="relative w-[28vw] h-fit flex justify-center items-center mb-6">
      <CircularProgress
        style={{ width: "100%", height: "auto" }}
        variant="determinate"
        value={
          ((minutes * 60 + seconds) /
            getRestartMinutes(timeState, location.pathname)) *
          100
        }
        sx={{ "& .MuiCircularProgress-circle": { strokeWidth: 1 } }}
      />
      <div className="absolute text-8xl">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Time;
