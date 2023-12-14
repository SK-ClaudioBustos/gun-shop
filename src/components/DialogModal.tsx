import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ReactElement, Ref, forwardRef } from 'react';
import "../sass/DialogModal.scss";
import { DialogData } from '../types';
import Modal from './Modal';

interface IDialogModalProps {
  dialogState: {
    show: boolean
    titulo: string
  }
  changeDialogState: (props: DialogData) => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogModal = (props: IDialogModalProps) => {
  const { dialogState, changeDialogState } = props;
  const { show, titulo } = dialogState;
  const closeDialog: DialogData = { show: false, titulo: "" };
  return (
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={ () => { changeDialogState(closeDialog) }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="dialog">{ titulo === "login" ? "Iniciar Sesión" : "Registro" }</DialogTitle>
        <DialogContent className="dialog">
          <Modal titulo={titulo}/>
        </DialogContent>
        <DialogActions className="dialog">
          <Button onClick={() => { changeDialogState(closeDialog) }}>Cancelar</Button>
          <Button onClick={() => { changeDialogState(closeDialog) }}>Aceptar</Button>
        </DialogActions>
      </Dialog>
  )
}

export default DialogModal;