import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Addcar(props) {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    firstname: " ",
    lastname: " ",
    streetaddress: " ",
    postcode: " ",
    city: " ",
    email: " ",
    phone: " ",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = event => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };
  const addCustomer = () => {
    props.saveCar(customer);
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ margin: 10 }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Add customer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New customer</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="firstname"
            onChange={e => handleInput(e)}
            value={customer.firstname}
            label="Firstname"
            fullWidth
          />
          <TextField
            margin="dense"
            name="lastname"
            onChange={e => handleInput(e)}
            value={customer.lastname}
            label="lastname"
            fullWidth
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={e => handleInput(e)}
            label="Street address"
            fullWidth
        />
        <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={e => handleInput(e)}
            label="Post code"
            fullWidth
        />
        <TextField
            margin="dense"
            name="city"
            value={customer.city}
            onChange={e => handleInput(e)}
            label="City"
            fullWidth
        />
        <TextField
            margin="dense"
            name="email"
            value={customer.email}
            onChange={e => handleInput(e)}
            label="Email"
            fullWidth
        />
        <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={e => handleInput(e)}
            label="Phone"
            fullWidth
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}