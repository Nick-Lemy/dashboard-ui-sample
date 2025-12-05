"use client";

import { Box, Typography, Paper, Tab, Tabs, Avatar } from "@mui/material";
import { useState } from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";
import CreateIcon from "@mui/icons-material/Create";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const kpiData = [
  {
    icon: MusicNoteIcon,
    value: "278.42K",
    label: "Tracks Created",
    color: "#6366f1",
  },
  { icon: PeopleIcon, value: "2.05M", label: "Active Users", color: "#6366f1" },
  {
    icon: CreateIcon,
    value: "160.17K",
    label: "Active Creators",
    color: "#6366f1",
  },
  {
    icon: PlayCircleIcon,
    value: "7.11M",
    label: "Total Plays",
    color: "#6366f1",
  },
  {
    icon: PersonAddIcon,
    value: "257.34K",
    label: "New Users",
    color: "#6366f1",
  },
];

const trendingTracks = [
  {
    title: "Rebel of the Industry",
    artist: "Systovis",
    plays: "3.49K plays",
    likes: "232 likes",
    image: "🎵",
  },
  {
    title: "WokStar",
    artist: "NFS Gwano",
    plays: "2.03K plays",
    likes: "107 likes",
    image: "🎵",
  },
  {
    title: "Way Out",
    artist: "CJ Sunrayside",
    plays: "1.94K plays",
    likes: "148 likes",
    image: "🎵",
  },
];

const trendingUsers = [
  { name: "Systovis", followers: "107.8K followers" },
  { name: "Jayzo Jordan", followers: "28K followers" },
  { name: "Itz Me Bang", followers: "19.6K followers" },
];

const chartPaths = [
  {
    // Last 12 Months - smoother, more data points
    path: "M 0 120 Q 40 140, 80 130 T 160 110 T 240 90 T 320 100 T 400 70 T 500 80",
    peak: { value: "9200", x: 420, y: 15 },
  },
  {
    // Last 8 Weeks - medium variation
    path: "M 0 140 Q 60 100, 120 90 T 240 110 T 360 85 T 500 95",
    peak: { value: "7100", x: 360, y: 25 },
  },
  {
    // Last 30 days - more dramatic peaks
    path: "M 0 150 Q 50 80, 100 60 T 200 100 T 300 80 T 400 120 T 500 100",
    peak: { value: "5800", x: 100, y: 20 },
  },
];

export default function ContentDashboard() {
  const [activeTab, setActiveTab] = useState(2);
  const currentChart = chartPaths[activeTab];

  return (
    <Box sx={{ p: 4, bgcolor: "#f3f4f6", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Overview
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography>andrew@rapchat.com</Typography>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#1f2937" }}>A</Avatar>
        </Box>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 3 }}>
        {/* KPIs Section */}
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                KPIs
              </Typography>
              <Typography variant="caption" color="text.secondary">
                as of 18 May 2020, 09:41 PM
              </Typography>
            </Box>
            <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
              <Tab
                label="Last 12 Months"
                sx={{ textTransform: "none", minWidth: "auto" }}
              />
              <Tab
                label="Last 8 Weeks"
                sx={{ textTransform: "none", minWidth: "auto" }}
              />
              <Tab
                label="Last 30 days"
                sx={{ textTransform: "none", minWidth: "auto" }}
              />
            </Tabs>
          </Box>

          {/* Chart */}
          <Box
            sx={{
              height: 200,
              bgcolor: "#f8f9ff",
              borderRadius: 2,
              mb: 2,
              position: "relative",
              display: "flex",
            }}
          >
            {/* Y-axis labels */}
            <Box
              sx={{
                width: 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                py: 1,
                pr: 1,
              }}
            >
              {[10000, 9000, 8000, 7000, 6000, 5000, 4000].map((num) => (
                <Typography
                  key={num}
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: 10, textAlign: "right" }}
                >
                  {num}
                </Typography>
              ))}
            </Box>

            {/* Chart area */}
            <Box sx={{ flex: 1, position: "relative" }}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#6366f1"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 33.33}
                    x2="500"
                    y2={i * 33.33}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                ))}
                <path
                  d={`${currentChart.path} L 500 200 L 0 200 Z`}
                  fill="url(#gradient)"
                />
                <path
                  d={currentChart.path}
                  stroke="#6366f1"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <Box
                sx={{
                  position: "absolute",
                  top: currentChart.peak.y,
                  left: currentChart.peak.x,
                  bgcolor: "#4f46e5",
                  color: "white",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: 12,
                  transform: "translateX(-50%)",
                }}
              >
                {currentChart.peak.value}
              </Box>
            </Box>
          </Box>

          {/* X-axis labels */}
          <Box sx={{ display: "flex", justifyContent: "space-between", px: 7 }}>
            {activeTab === 0 &&
              ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
                (month) => (
                  <Typography
                    key={month}
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: 10 }}
                  >
                    {month}
                  </Typography>
                )
              )}
            {activeTab === 1 &&
              [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
                "Week 7",
                "Week 8",
              ].map((week) => (
                <Typography
                  key={week}
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: 10 }}
                >
                  {week.replace("Week ", "W")}
                </Typography>
              ))}
            {activeTab === 2 &&
              [
                "10",
                "11",
                "12",
                "13",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
              ].map(
                (day, idx) =>
                  idx % 2 === 0 && (
                    <Typography
                      key={day}
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: 10 }}
                    >
                      {day}
                    </Typography>
                  )
              )}
          </Box>
        </Paper>

        {/* Stats Cards */}
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          {kpiData.map((item, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
            >
              <Box sx={{ bgcolor: "#eef2ff", p: 1.5, borderRadius: 2 }}>
                <item.icon sx={{ color: item.color }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>

      {/* Trending Sections */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 3,
          mt: 3,
        }}
      >
        {/* Trending Tracks */}
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Trending Tracks
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Today
              </Typography>
            </Box>
            <ArrowForwardIcon sx={{ color: "#6366f1" }} />
          </Box>
          {trendingTracks.map((track, idx) => (
            <Box key={idx} sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: "#4f46e5",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {track.image}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {track.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {track.artist}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 0.5 }}>
                  <Typography variant="caption">{track.plays}</Typography>
                  <Typography variant="caption">{track.likes}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Paper>

        {/* Trending Users */}
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Trending Users
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Today
              </Typography>
            </Box>
            <ArrowForwardIcon sx={{ color: "#6366f1" }} />
          </Box>
          {trendingUsers.map((user, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}
            >
              <Avatar sx={{ bgcolor: "#6366f1" }}>{user.name[0]}</Avatar>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {user.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {user.followers}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>

        {/* User Activity */}
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                User Activity
              </Typography>
              <Typography variant="caption" color="text.secondary">
                New Tracks
              </Typography>
            </Box>
            <Typography variant="caption">...</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Y-axis numbers */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 150,
                pr: 1,
              }}
            >
              {[1000, 800, 600, 400, 200, 0].map((num) => (
                <Typography
                  key={num}
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: 9, lineHeight: 1 }}
                >
                  {num}
                </Typography>
              ))}
            </Box>
            {/* Chart bars */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
                height: 150,
              }}
            >
              {[60, 80, 50, 90, 70, 100, 85].map((height, idx) => (
                <Box
                  key={idx}
                  sx={{
                    flex: 1,
                    bgcolor: "#6366f1",
                    borderRadius: "4px 4px 0 0",
                    height: `${height}%`,
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1, pl: 4 }}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <Typography key={day} variant="caption" color="text.secondary">
                {day}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
