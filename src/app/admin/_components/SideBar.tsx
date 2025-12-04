"use client";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  { label: "Overview", icon: BarChartIcon, active: true },
  { label: "A&R Data", icon: PeopleIcon },
  { label: "Challenges", icon: EmojiEventsIcon },
  { label: "Songs", icon: MusicNoteIcon },
  { label: "Users", icon: PersonIcon },
  { label: "Settings", icon: SettingsIcon },
];

export default function SideBar() {
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        background:
          "linear-gradient(180deg, rgba(45,49,66,1) 0%, rgba(25,28,38,1) 100%)",
        color: "#9ca3af",
        p: 2,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 4,
          color: "white",
        }}
      >
        <Box sx={{ fontSize: 24, fontWeight: "bold" }}>RC</Box>
        <Box sx={{ fontSize: 18 }}>RAPCHAT</Box>
      </Box>

      <List sx={{ p: 0 }}>
        {menuItems.map(({ label, icon: Icon, active }) => (
          <ListItemButton
            key={label}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              color: active ? "white" : "#9ca3af",
              bgcolor: active ? "rgba(255,255,255,0.1)" : "transparent",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
