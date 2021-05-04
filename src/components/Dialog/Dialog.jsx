import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function DialogComponent({open, handleClose, handleSubmit,  children}) {
    return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add New Event</DialogTitle>

      <DialogContent>
          {children}
      </DialogContent>
      <DialogActions style={{ padding: "15px 22px" }}>
        <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Add
          </Button>
      </DialogActions>
    </Dialog>
    )
}

export default DialogComponent;
