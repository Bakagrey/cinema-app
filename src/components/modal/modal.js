import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useStyles from './modal-style';
import ModalContent from './modal-content/modal-content';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({isModalOpen,closeModal,movie}) {
  const classes = new useStyles();  
  return (
      <Dialog
        maxWidth={false}
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.modalContent}>
        <DialogTitle id="alert-dialog-slide-title" className={classes.modalTitle}>{`${movie.name} | ${movie.age}+`}</DialogTitle>
        <DialogContent>          
            <ModalContent movie={movie} isModalOpen={isModalOpen}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
        </div>
      </Dialog>
  );
}