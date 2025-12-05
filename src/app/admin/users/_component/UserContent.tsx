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
} from "@mui/material";

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
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        bgcolor: "#f3f4f6",
        minHeight: "100vh",
        pt: { xs: 10, md: 4 },
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
          Clients
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
            <Paper sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
              <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
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
                    strokeWidth="10"
                    strokeDasharray={`${(stat.percentage * 314) / 100} 314`}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    style={{
                      animation: "drawCircle 1.5s ease-out forwards",
                      strokeDashoffset: 314,
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
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grow>
        ))}

        {/* Pie Chart */}
        <Grow in timeout={1000}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
                      <circle
                        key={idx}
                        cx="70"
                        cy="70"
                        r="50"
                        fill="none"
                        stroke={segment.color}
                        strokeWidth="30"
                        strokeDasharray={`${
                          (segment.percentage * 314) / 100
                        } 314`}
                        transform={`rotate(${rotation - 90} 70 70)`}
                      />
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
                    <Typography variant="caption" sx={{ fontSize: 11 }}>
                      {segment.label}: {segment.percentage}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grow>
      </Box>

      {/* Users Table */}
      <Fade in timeout={1200}>
        <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Box sx={{ p: { xs: 2, md: 3 }, borderBottom: "1px solid #e5e7eb" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              All Clients
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.7rem", md: "0.75rem" } }}
            >
              Manage and view all registered clients
            </Typography>
          </Box>
          <TableContainer sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f9fafb" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Client</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Transactions
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Portfolio</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Joined</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:hover": { bgcolor: "#f9fafb" } }}
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
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
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
                      <Typography variant="body2">{user.tracks}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{user.followers}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
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
