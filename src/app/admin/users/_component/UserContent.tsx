"use client";

import {
  Box,
  Typography,
  Paper,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Fade,
  Grow,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useTheme,
  Tooltip,
} from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FilterListIcon from "@mui/icons-material/FilterList";

const userData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@techcorp.com",
    status: "Active",
    tracks: 45,
    followers: "$125K",
    joined: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@ventures.com",
    status: "Active",
    tracks: 32,
    followers: "$82K",
    joined: "2024-02-20",
  },
  {
    id: 3,
    name: "Mike Williams",
    email: "mike.w@global.com",
    status: "Inactive",
    tracks: 18,
    followers: "$31K",
    joined: "2024-03-10",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@innovations.com",
    status: "Active",
    tracks: 67,
    followers: "$253K",
    joined: "2023-12-05",
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "chris.b@enterprise.com",
    status: "Active",
    tracks: 89,
    followers: "$427K",
    joined: "2023-11-22",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.a@startup.com",
    status: "Pending",
    tracks: 5,
    followers: "$8.9K",
    joined: "2024-04-01",
  },
  {
    id: 7,
    name: "David Martinez",
    email: "david.m@consulting.com",
    status: "Active",
    tracks: 53,
    followers: "$158K",
    joined: "2024-01-30",
  },
  {
    id: 8,
    name: "Jessica Taylor",
    email: "jessica.t@holdings.com",
    status: "Active",
    tracks: 41,
    followers: "$184K",
    joined: "2024-02-14",
  },
];

const statsData = [
  { label: "Total Clients", value: "15.2K", percentage: 68, color: "#6366f1" },
  {
    label: "Active Accounts",
    value: "12.8K",
    percentage: 85,
    color: "#10b981",
  },
];

const pieChartData = [
  { label: "Premium", value: 1420000, percentage: 69.3, color: "#10b981" },
  { label: "Standard", value: 430000, percentage: 21, color: "#6366f1" },
  { label: "Trial", value: 200000, percentage: 9.7, color: "#f59e0b" },
];

export default function UserContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const filteredUsers = useMemo(() => {
    return userData
      .filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus =
          statusFilter === "All" || user.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "email") return a.email.localeCompare(b.email);
        if (sortBy === "joined")
          return new Date(b.joined).getTime() - new Date(a.joined).getTime();
        if (sortBy === "transactions") return b.tracks - a.tracks;
        return 0;
      });
  }, [searchQuery, statusFilter, sortBy]);

  const bgColor = darkMode ? "#1a1a1a" : "#f3f4f6";
  const paperBg = darkMode ? "#2d2d2d" : "#ffffff";
  const textColor = darkMode ? "#e5e7eb" : "#000000";
  const textSecondary = darkMode ? "#9ca3af" : "text.secondary";

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        bgcolor: bgColor,
        minHeight: "100vh",
        pt: { xs: 10, md: 4 },
        transition: "background-color 0.3s",
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
            color: textColor,
          }}
        >
          Clients
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* <IconButton
            onClick={() => setDarkMode(!darkMode)}
            sx={{ color: textColor }}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton> */}
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: { sm: "0.875rem", md: "1rem" },
              color: textColor,
            }}
          >
            nicklemykayiranga@gmail.com
          </Typography>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#1f2937" }}>N</Avatar>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 3,
          mb: 3,
        }}
      >
        {statsData.map((stat, idx) => (
          <Grow in timeout={600 + idx * 200} key={idx}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: "center",
                bgcolor: paperBg,
              }}
            >
              <Tooltip
                title={
                  <Box sx={{ p: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: "bold", display: "block" }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography variant="caption">
                      {stat.value} ({stat.percentage}% of target)
                    </Typography>
                  </Box>
                }
                arrow
                placement="top"
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    mb: 2,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredStat(idx)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke={stat.color}
                      strokeWidth={hoveredStat === idx ? "12" : "10"}
                      strokeDasharray={`${(stat.percentage * 314) / 100} 314`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                      style={{
                        animation: "drawCircle 1.5s ease-out forwards",
                        strokeDashoffset: 314,
                        transition: "stroke-width 0.3s",
                      }}
                    />
                    <style>{`
                  @keyframes drawCircle {
                    to {
                      stroke-dashoffset: ${314 - (stat.percentage * 314) / 100};
                    }
                  }
                `}</style>
                  </svg>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: stat.color }}
                    >
                      {stat.percentage}%
                    </Typography>
                  </Box>
                </Box>
                {/* </Box> */}
              </Tooltip>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 0.5, color: textColor }}
              >
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ color: textSecondary }}>
                {stat.label}
              </Typography>
            </Paper>
          </Grow>
        ))}

        {/* Pie Chart */}
        <Grow in timeout={1000}>
          <Paper sx={{ p: 3, borderRadius: 2, bgcolor: paperBg }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: textColor }}
            >
              Account Tiers
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box sx={{ position: "relative", width: 140, height: 140 }}>
                <svg width="140" height="140" viewBox="0 0 140 140">
                  {pieChartData.map((segment, idx) => {
                    const prevPercentages = pieChartData
                      .slice(0, idx)
                      .reduce((sum, s) => sum + s.percentage, 0);
                    const rotation = (prevPercentages * 360) / 100;
                    return (
                      <Tooltip
                        key={idx}
                        title={
                          <Box sx={{ p: 0.5 }}>
                            <Typography
                              variant="caption"
                              sx={{ fontWeight: "bold", display: "block" }}
                            >
                              {segment.label}
                            </Typography>
                            <Typography variant="caption">
                              ${(segment.value / 1000).toFixed(1)}K (
                              {segment.percentage}%)
                            </Typography>
                          </Box>
                        }
                        arrow
                        placement="top"
                      >
                        <circle
                          cx="70"
                          cy="70"
                          r="50"
                          fill="none"
                          stroke={segment.color}
                          strokeWidth={hoveredSegment === idx ? "35" : "30"}
                          strokeDasharray={`${
                            (segment.percentage * 314) / 100
                          } 314`}
                          transform={`rotate(${rotation - 90} 70 70)`}
                          onMouseEnter={() => setHoveredSegment(idx)}
                          onMouseLeave={() => setHoveredSegment(null)}
                          style={{
                            cursor: "pointer",
                            transition: "stroke-width 0.3s",
                          }}
                        />
                      </Tooltip>
                    );
                  })}
                  <circle cx="70" cy="70" r="35" fill="white" />
                </svg>
              </Box>
              <Box sx={{ flex: 1 }}>
                {pieChartData.map((segment, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: segment.color,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 11, color: textColor }}
                    >
                      {segment.label}: {segment.percentage}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grow>
      </Box>
      {/* Search and Filters */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: 2, bgcolor: paperBg }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: { xs: "stretch", md: "center" },
          }}
        >
          <TextField
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                bgcolor: darkMode ? "#1a1a1a" : "#fff",
                color: textColor,
              },
              "& .MuiInputLabel-root": { color: textSecondary },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: textSecondary }} />
                </InputAdornment>
              ),
            }}
            size="small"
          />
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel sx={{ color: textSecondary }}>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
              sx={{
                bgcolor: darkMode ? "#1a1a1a" : "#fff",
                color: textColor,
              }}
            >
              <MenuItem value="All">All Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel sx={{ color: textSecondary }}>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Sort By"
              sx={{
                bgcolor: darkMode ? "#1a1a1a" : "#fff",
                color: textColor,
              }}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="joined">Recently Joined</MenuItem>
              <MenuItem value="transactions">Most Transactions</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
      {/* Users Table */}
      <Fade in timeout={1200}>
        <Paper sx={{ borderRadius: 2, overflow: "hidden", bgcolor: paperBg }}>
          <Box
            sx={{
              p: { xs: 2, md: 3 },
              borderBottom: `1px solid ${darkMode ? "#444" : "#e5e7eb"}`,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: textColor,
              }}
            >
              All Clients ({filteredUsers.length})
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "0.7rem", md: "0.75rem" },
                color: textSecondary,
              }}
            >
              Manage and view all registered clients
            </Typography>
          </Box>
          <TableContainer sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: darkMode ? "#3a3a3a" : "#f9fafb" }}>
                  <TableCell sx={{ fontWeight: "bold", color: textColor }}>
                    Client
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: textColor }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: textColor }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: textColor }}>
                    Transactions
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: textColor }}>
                    Portfolio
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: textColor }}>
                    Joined
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      "&:hover": { bgcolor: darkMode ? "#3a3a3a" : "#f9fafb" },
                    }}
                  >
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          sx={{ bgcolor: "#6366f1", width: 36, height: 36 }}
                        >
                          {user.name.charAt(0)}
                        </Avatar>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: textColor }}
                        >
                          {user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: textSecondary }}>
                        {user.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        size="small"
                        sx={{
                          bgcolor:
                            user.status === "Active"
                              ? "#d1fae5"
                              : user.status === "Inactive"
                              ? "#fee2e2"
                              : "#fef3c7",
                          color:
                            user.status === "Active"
                              ? "#065f46"
                              : user.status === "Inactive"
                              ? "#991b1b"
                              : "#92400e",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: textColor }}>
                        {user.tracks}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: textColor }}>
                        {user.followers}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: textSecondary }}>
                        {user.joined}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Fade>
    </Box>
  );
}
