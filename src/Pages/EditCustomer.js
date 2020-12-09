import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import BorderColorIcon from "@material-ui/icons/BorderColor";

export default function Editcar(props) {
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
    setCustomer({
        firstname: props.customer.firstname,
        lastname: props.customer.lastname,
        streetaddress: props.customer.streetaddress,
        postcode: props.customer.postcode,
        city: props.customer.city,
        email: props.customer.email,
        phone:props.customer.phone,
    });
    setOpen(true);
    console.log(props.customer);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = event => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };
  const updateCustomer = () => {
    props.updateCustomer(customer, props.customer.links[0].href);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<BorderColorIcon />}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit car</DialogTitle>
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
          <Button onClick={updateCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}