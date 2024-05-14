import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { icons } from "./icons";
import { MemoryRouter, Routes, Route } from "react-router";
import NumberInputAdornments from "./number-input";
import NonLinearSlider from "./slider";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import FocusSlider from "../features/time/focus-slider";
import ShortSlider from "../features/time/short-slider";
import LongSlider from "../features/time/long-slider";
import Switch from '@mui/material/Switch';


const SettingHeader: React.FC<any> = ({ handleClose }) => {

  return (
    <div className="flex justify-between px-4 py-2">
      <div className="">

      </div>
      <div className="" onClick={handleClose}>
        <icons.close />
      </div>
    </div>
  )
}

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = React.useState<"main" | "timer">(
    "main",
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={() => null}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            width: 350,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },

          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex justify-between px-5 py-2 border-b">
          <div className="">
            {currentMenu !== 'main' ? <div className="flex items-center" onClick={() => setCurrentMenu('main')}>
              <icons.back sx={{ width: 32, height: 'auto' }} />
              <span className="ml-3 font-semibold text-xl">{currentMenu}</span>
            </div> : null}
          </div>
          <div className="" onClick={handleClose}>
            <icons.close sx={{ width: 32 }} />
          </div>
        </div>
        {currentMenu === "main" ? (
          <div className="">
            <MenuItem onClick={() => setCurrentMenu("timer")} sx={{ paddingX: '20px', paddingY: '12px' }}>
              <ListItemIcon>
                <icons.time fontSize="small" />
              </ListItemIcon>
              Timer
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ paddingX: '20px', paddingY: '12px' }}>
              <ListItemIcon>
                <icons.alarm fontSize="small" />
              </ListItemIcon>
              Alarm
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ paddingX: '20px', paddingY: '12px' }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        ) : null}

        {currentMenu === "timer" ? (
          <div className="">
            <div className="px-5 py-2">
              <FocusSlider />
            </div>
            <div className="px-5 py-2">
              <ShortSlider />
            </div>
            <div className="px-5 py-2">
              <LongSlider />
            </div>
            <div className="px-5 py-2 flex justify-between">
              <span>Auto start breaks</span>
              <Switch
                checked={true}
                onChange={() => ''}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
            <div className="px-5 py-2 flex justify-between">
              <span>Auto start focus</span>
              <Switch
                checked={true}
                onChange={() => ''}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
          </div>
        ) : null}

      </Menu>
    </>
  );
}
