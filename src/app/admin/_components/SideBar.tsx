"use client";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { label: "Overview", icon: BarChartIcon, path: "/admin" },
  { label: "Users", icon: PersonIcon, path: "/admin/users" },
  //   { label: "Settings", icon: SettingsIcon, path: "/admin/settings" },
];

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
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
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            RC
          </Box>
          <Box sx={{ fontSize: 18, color: "white" }}>RAPCHAT</Box>
        </Box>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <List sx={{ p: 0, mt: 2 }}>
        {menuItems.map(({ label, icon: Icon, path }) => (
          <ListItemButton
            key={label}
            onClick={() => handleNavigation(path)}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              color: pathname === path ? "white" : "#9ca3af",
              bgcolor:
                pathname === path ? "rgba(255,255,255,0.1)" : "transparent",
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

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            bgcolor: "#2d3142",
            color: "white",
            "&:hover": { bgcolor: "#1f2937" },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return sidebarContent;
}
