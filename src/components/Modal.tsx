import { Box, FormControl, TextField } from "@mui/material";

interface IModalProps {
    titulo: string
}

const Modal = (props: IModalProps) => {
    const { titulo } = props;
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 }
            }}
            noValidate
            autoComplete="off"
        >
            {
                titulo === "login"
                    ? <ModalLogin />
                    : <ModalRegister />
            }
        </Box>
    )
}

const ModalLogin = () => {
    return (
        <>
            <FormControl variant="standard">
                <TextField sx={{ color: "#000" }} label="Nombre de usuario" variant="standard" />
            </FormControl>

            <FormControl variant="standard">
                <TextField id="outlined-basic" label="Contraseña" variant="standard" />
            </FormControl>
        </>
    );
}

const ModalRegister = () => {
    return (
        <>
            <FormControl variant="standard">
                <TextField sx={{ color: "#000" }} label="Nombre de usuario o email" variant="standard" />
            </FormControl>

            <FormControl variant="standard">
                <TextField sx={{ color: "#000" }} label="Email" variant="standard" />
            </FormControl>

            <FormControl variant="standard">
                <TextField sx={{ color: "#000" }} label="Edad" variant="standard" />
            </FormControl>

            <FormControl variant="standard">
                <TextField sx={{ color: "#000" }} label="DNI" variant="standard" />
            </FormControl>

            <FormControl variant="standard">
                <TextField id="outlined-basic" label="Contraseña" variant="standard" />
            </FormControl>

            <FormControl variant="standard">
                <TextField id="outlined-basic" label="Repetir contraseña" variant="standard" />
            </FormControl>
        </>
    );
}

export default Modal