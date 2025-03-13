import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ParkingSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingDialog, setBookingDialog] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleBooking = (space) => {
    setSelectedSpace(space);
    setBookingDialog(true);
  };

  const confirmBooking = () => {
    // Handle booking confirmation
    setBookingDialog(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Find Parking</Typography>
      
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Grid container spacing={3}>
        {/* Sample parking spaces - will be replaced with actual data */}
        {[1, 2, 3].map((space) => (
          <Grid item xs={12} md={4} key={space}>
            <Card>
              <CardContent>
                <Typography variant="h6">Parking Space {space}</Typography>
                <Typography color="textSecondary">Location: Sample Street</Typography>
                <Typography>Price: $2/hour</Typography>
                <Typography>Available Spots: 5</Typography>
              </CardContent>
              <CardActions>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => handleBooking(space)}
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={bookingDialog} onClose={() => setBookingDialog(false)}>
        <DialogTitle>Book Parking Space</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            type="datetime-local"
            label="Start Time"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            type="datetime-local"
            label="End Time"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBookingDialog(false)}>Cancel</Button>
          <Button onClick={confirmBooking} variant="contained">Confirm Booking</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ParkingSearch;
