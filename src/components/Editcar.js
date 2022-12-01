import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
  } from "@mui/material";
  import React from "react";
  import BuildIcon from '@mui/icons-material/Build';
  
  export default function Editcar({editCar, params}) {
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
      setCar({
        brand: params.data.brand,
        model: params.data.model,
        color: params.data.color,
        fuel: params.data.fuel,
        year: params.data.year,
        price: params.data.price
      })
    };
  
    const handleClose = () => {
      console.log("close handels kutsuttu")
      setOpen(false);
    };
  
    const handleCancel = () => {
      console.log("painets känsel");
      setOpen(false);
    };

    const handleSave = () => {
        console.log("save funkis");
        editCar(car, params.value);
        setOpen(false);
    }
  
    const inputChanged = (event) => {
      console.log("input changed kutsuttu")
      setCar({...car, [event.target.name] : event.target.value})
    }
  
    return (
      <div>
        <IconButton color="primary" onClick={handleClickOpen}>
          <BuildIcon/>
        </IconButton>
  
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
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }