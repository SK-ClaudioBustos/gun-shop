import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ReactElement, Ref, forwardRef } from 'react';
import { DialogData } from '../types';
import Modal from './Modal';
import { Box } from '@mui/material';

interface IDialogModalProps {
  dialogState: {
    show: boolean
    titulo: string
  }
  changeDialogState: (props: DialogData) => void
}

const style = {
  container: { backgroundColor: "#353535" },
  title: { fontFamily: "Kanit, sans-serif", borderBottom: "1px solid #fff", color: "#fff" },
  content: { marginTop: "15px" },
  button1: { fontFamily: "Kanit, sans-serif", fontWeight: "bold", color: "#1d0cd8" },
  button2: { fontFamily: "Kanit, sans-serif", fontWeight: "bold", color: "#69cc5b" }
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
  const closeDialog: DialogData = { show: false, titulo };
  const tituloDialog = titulo === "login" ? "Iniciar Sesión" : "Registro";
  return (
    <Dialog
      disableScrollLock
      open={show}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => { changeDialogState(closeDialog) }}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box sx={style.container}>
        <DialogTitle sx={style.title}>
          {tituloDialog}
        </DialogTitle>
        <DialogContent sx={style.content}>
          <Modal titulo={titulo} />
        </DialogContent>
        <DialogActions >
          <Button sx={style.button1} color="success" onClick={() => { changeDialogState(closeDialog) }}>Aceptar</Button>
          <Button sx={style.button2} color="primary" onClick={() => { changeDialogState(closeDialog) }}>Cancelar</Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export default DialogModal;