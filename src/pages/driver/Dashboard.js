import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const DriverDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Driver Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Active Bookings</Typography>
            {/* Active bookings content */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Recent Payments</Typography>
            {/* Recent payments content */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">My Vehicles</Typography>
            {/* Vehicles content */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DriverDashboard;
