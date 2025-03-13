import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ParkingManagement = () => {
  const [open, setOpen] = useState(false);
  const [parkingSpaces, setParkingSpaces] = useState([]);
  const [newSpace, setNewSpace] = useState({
    name: '',
    address: '',
    totalSpots: '',
    pricePerHour: '',
    operatingHours: { open: '', close: '' }
  });

  const handleAddSpace = () => {
    setParkingSpaces([...parkingSpaces, newSpace]);
    setNewSpace({
      name: '',
      address: '',
      totalSpots: '',
      pricePerHour: '',
      operatingHours: { open: '', close: '' }
    });
    setOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Parking Spaces</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Add New Space</Button>
      </Box>

      <Grid container spacing={3}>
        {parkingSpaces.map((space, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{space.name}</Typography>
                <Typography color="textSecondary">{space.address}</Typography>
                <Typography>Total Spots: {space.totalSpots}</Typography>
                <Typography>Price: ${space.pricePerHour}/hour</Typography>
                <Typography>Hours: {space.operatingHours.open} - {space.operatingHours.close}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Parking Space</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={newSpace.name}
            onChange={(e) => setNewSpace({...newSpace, name: e.target.value})}
          />
          <TextField
            fullWidth
            label="Address"
            margin="normal"
            value={newSpace.address}
            onChange={(e) => setNewSpace({...newSpace, address: e.target.value})}
          />
          <TextField
            fullWidth
            label="Total Spots"
            type="number"
            margin="normal"
            value={newSpace.totalSpots}
            onChange={(e) => setNewSpace({...newSpace, totalSpots: e.target.value})}
          />
          <TextField
            fullWidth
            label="Price per Hour"
            type="number"
            margin="normal"
            value={newSpace.pricePerHour}
            onChange={(e) => setNewSpace({...newSpace, pricePerHour: e.target.value})}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Opening Time"
                type="time"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={newSpace.operatingHours.open}
                onChange={(e) => setNewSpace({
                  ...newSpace,
                  operatingHours: {...newSpace.operatingHours, open: e.target.value}
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Closing Time"
                type="time"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={newSpace.operatingHours.close}
                onChange={(e) => setNewSpace({
                  ...newSpace,
                  operatingHours: {...newSpace.operatingHours, close: e.target.value}
                })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddSpace} variant="contained">Add Space</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ParkingManagement;
