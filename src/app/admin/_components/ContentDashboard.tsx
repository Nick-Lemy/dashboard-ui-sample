"use client";

import {
  Box,
  Typography,
  Paper,
  Tab,
  Tabs,
  Avatar,
  Fade,
  Grow,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const kpiData = [
  {
    icon: AttachMoneyIcon,
    value: "$2.84M",
    label: "Total Revenue",
    color: "#6366f1",
  },
  {
    icon: PeopleIcon,
    value: "15.2K",
    label: "Active Clients",
    color: "#6366f1",
  },
  {
    icon: SwapHorizIcon,
    value: "8,547",
    label: "Transactions",
    color: "#6366f1",
  },
  {
    icon: TrendingUpIcon,
    value: "$487K",
    label: "Monthly Revenue",
    color: "#6366f1",
  },
  {
    icon: PersonAddIcon,
    value: "1,234",
    label: "New Clients",
    color: "#6366f1",
  },
];

const trendingTracks = [
  {
    title: "Premium Account",
    artist: "Enterprise Plan",
    plays: "$45.2K revenue",
    likes: "156 clients",
    icon: WorkspacePremiumIcon,
  },
  {
    title: "Business Account",
    artist: "Pro Plan",
    plays: "$28.5K revenue",
    likes: "89 clients",
    icon: BusinessCenterIcon,
  },
  {
    title: "Starter Account",
    artist: "Basic Plan",
    plays: "$12.8K revenue",
    likes: "245 clients",
    icon: RocketLaunchIcon,
  },
];

const trendingUsers = [
  { name: "TechCorp Inc.", followers: "$285K portfolio" },
  { name: "Global Ventures", followers: "$156K portfolio" },
  { name: "StartupHub LLC", followers: "$98K portfolio" },
];

const chartPaths = [
  {
    // Last 12 Months
    data: [
      { name: "Jan", value: 6200 },
      { name: "Feb", value: 5800 },
      { name: "Mar", value: 6400 },
      { name: "Apr", value: 7200 },
      { name: "May", value: 7500 },
      { name: "Jun", value: 8100 },
      { name: "Jul", value: 8800 },
      { name: "Aug", value: 9200 },
    ],
  },
  {
    // Last 8 Weeks
    data: [
      { name: "W1", value: 4800 },
      { name: "W2", value: 5800 },
      { name: "W3", value: 6500 },
      { name: "W4", value: 6100 },
      { name: "W5", value: 6700 },
      { name: "W6", value: 7100 },
      { name: "W7", value: 6800 },
      { name: "W8", value: 6600 },
    ],
  },
  {
    // Last 30 days
    data: [
      { name: "D1", value: 3200 },
      { name: "D5", value: 4800 },
      { name: "D10", value: 5800 },
      { name: "D15", value: 5100 },
      { name: "D20", value: 4500 },
      { name: "D25", value: 5200 },
      { name: "D27", value: 4200 },
      { name: "D28", value: 3900 },
      { name: "D29", value: 4400 },
      { name: "D30", value: 4600 },
    ],
  },
];

const transactionData = [
  { day: "Su", value: 612, fullDay: "Sunday" },
  { day: "Mo", value: 824, fullDay: "Monday" },
  { day: "Tu", value: 503, fullDay: "Tuesday" },
  { day: "We", value: 945, fullDay: "Wednesday" },
  { day: "Th", value: 721, fullDay: "Thursday" },
  { day: "Fr", value: 1056, fullDay: "Friday" },
  { day: "Sa", value: 892, fullDay: "Saturday" },
];

export default function ContentDashboard() {
  const [activeTab, setActiveTab] = useState(2);
  const currentChart = chartPaths[activeTab];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 10, md: 4 },
        paddingX: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2.125rem" },
          }}
        >
          Overview
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: { sm: "0.875rem", md: "1rem" },
            }}
          >
            nicklemykayiranga@gmail.com
          </Typography>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#1f2937" }}>N</Avatar>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gap: 3,
        }}
      >
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
            <Tabs
              value={activeTab}
              onChange={(e, v) => setActiveTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                minHeight: { xs: 36, md: 48 },
                "& .MuiTab-root": {
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                },
              }}
            >
              <Tab
                label="Last 12 Months"
                sx={{
                  textTransform: "none",
                  minWidth: "auto",
                  px: { xs: 1, md: 2 },
                }}
              />
              <Tab
                label="Last 8 Weeks"
                sx={{
                  textTransform: "none",
                  minWidth: "auto",
                  px: { xs: 1, md: 2 },
                }}
              />
              <Tab
                label="Last 30 days"
                sx={{
                  textTransform: "none",
                  minWidth: "auto",
                  px: { xs: 1, md: 2 },
                }}
              />
            </Tabs>
          </Box>

          {/* Chart */}
          {/* Chart */}
          <Fade in timeout={800}>
            <Box>
              <Box
                sx={{
                  height: 250,
                  bgcolor: "#f8f9ff",
                  borderRadius: 2,
                  mb: 2,
                  p: 2,
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={currentChart.data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#6366f1"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#6366f1"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={{ stroke: "#e5e7eb" }}
                      tickFormatter={(value) => value.toLocaleString()}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      formatter={(value: any) => [
                        value.toLocaleString(),
                        "Value",
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#6366f1"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      activeDot={{ r: 6, fill: "#4f46e5" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </Fade>
        </Paper>
        {/* Stats Cards */}
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          {kpiData.map((item, idx) => (
            <Grow in timeout={600 + idx * 150} key={idx}>
              <Box
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
            </Grow>
          ))}
        </Paper>
      </Box>

      {/* Trending Sections */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
          mt: 3,
        }}
      >
        {/* Trending Tracks */}
        <Grow in timeout={800}>
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
                  Top Services
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
                  <track.icon sx={{ color: "white", fontSize: 28 }} />
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
        </Grow>

        {/* Trending Users */}
        <Grow in timeout={1000}>
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
                  Top Clients
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
        </Grow>

        {/* User Activity */}
        <Grow in timeout={1200}>
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
                  Transaction Volume
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Daily Activity
                </Typography>
              </Box>
              <Typography variant="caption">...</Typography>
              <Typography variant="caption">...</Typography>
            </Box>
            <Box sx={{ height: 180, mt: 2 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={transactionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickFormatter={(value) => value.toLocaleString()}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "8px",
                      color: "white",
                    }}
                    formatter={(value: any, name: any, props: any) => [
                      `${value} transactions`,
                      props.payload.fullDay,
                    ]}
                  />
                  <Bar
                    dataKey="value"
                    fill="#6366f1"
                    radius={[4, 4, 0, 0]}
                    activeBar={{ fill: "#4f46e5" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grow>
      </Box>
    </Box>
  );
}
