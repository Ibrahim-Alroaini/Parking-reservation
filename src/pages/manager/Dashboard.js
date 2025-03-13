import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const ManagerDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Parking Manager Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Revenue Overview</Typography>
            {/* Revenue content */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Active Bookings</Typography>
            {/* Active bookings content */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Available Spaces</Typography>
            {/* Spaces content */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerDashboard;
