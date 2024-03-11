import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmDeleteDialog = ({ open, handleClose, deletehandler }) => {
  return (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>confirm delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          are you sure you want to delete this group
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>no</Button>
        <Button color="error" onClick={deletehandler}>yes</Button>

      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
