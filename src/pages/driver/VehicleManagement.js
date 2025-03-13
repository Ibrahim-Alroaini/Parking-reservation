import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const VehicleManagement = () => {
  const [open, setOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    plateNumber: '',
    model: '',
    type: ''
  });

  const handleAddVehicle = () => {
    setVehicles([...vehicles, newVehicle]);
    setNewVehicle({ plateNumber: '', model: '', type: '' });
    setOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">My Vehicles</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Add Vehicle</Button>
      </Box>

      <Grid container spacing={3}>
        {vehicles.map((vehicle, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{vehicle.model}</Typography>
                <Typography color="textSecondary">Plate: {vehicle.plateNumber}</Typography>
                <Typography color="textSecondary">Type: {vehicle.type}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Vehicle</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Plate Number"
            margin="normal"
            value={newVehicle.plateNumber}
            onChange={(e) => setNewVehicle({...newVehicle, plateNumber: e.target.value})}
          />
          <TextField
            fullWidth
            label="Model"
            margin="normal"
            value={newVehicle.model}
            onChange={(e) => setNewVehicle({...newVehicle, model: e.target.value})}
          />
          <TextField
            fullWidth
            label="Type"
            margin="normal"
            value={newVehicle.type}
            onChange={(e) => setNewVehicle({...newVehicle, type: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddVehicle} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VehicleManagement;
