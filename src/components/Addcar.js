import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

export default function Addcar({addCar}) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel : "",
    year : "",
    price: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close handels kutsuttu")
    addCar(car);
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("painets känsel");
    setOpen(false);
  };

  const inputChanged = (event) => {
    console.log("input changed kutsuttu")
    setCar({...car, [event.target.name] : event.target.value})
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add car
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <TextField
            name="brand"
            value= {car.brand}
            autoFocus
            margin="dense"
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="model"
            value= {car.model}
            margin="dense"
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="color"
            value= {car.color}
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="fuel"
            value= {car.fuel}
            margin="dense"
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="year"
            value= {car.year}
            margin="dense"
            label="Year"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="price"
            value= {car.price}
            margin="dense"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
