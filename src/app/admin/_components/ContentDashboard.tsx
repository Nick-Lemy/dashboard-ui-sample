import { Box, Container, Grid } from "@mui/material";

export default function ContentDashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          color: "black",
          paddingBottom: 2,
        }}
      >
        Dashboard Content
      </Box>
      <div className="w-full grid grid-cols-3 gap-3.5">
        <Box className=" col-span-2 bg-white rounded-md p-2">
          <Box sx={{ fontSize: 14, fontWeight: "bold", color: "black" }}>
            KPIs
          </Box>
        </Box>
        <Box className="bg-white rounded-md p-2">
          <p>This is where the main content of the dashboard will go.</p>
        </Box>
      </div>
    </Box>
  );
}
