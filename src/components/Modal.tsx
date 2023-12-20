import { Box, InputAdornment, TextField } from "@mui/material";
import Person4Icon from '@mui/icons-material/Person4';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import ElderlyIcon from '@mui/icons-material/Elderly';

interface IModalProps {
    titulo: string
}

const styles = {
    input: { input: { color: '#fff' } }
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
            <TextField
                sx={styles.input}
                color="warning"
                placeholder="Nombre de usuario"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person4Icon />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                sx={styles.input}
                color="warning"
                type="password"
                placeholder="Contraseña"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordIcon />
                        </InputAdornment>
                    )
                }}
            />
        </>
    );
}

const ModalRegister = () => {
    return (
        <>

            <TextField
                sx={styles.input}
                color="warning"
                placeholder="Nombre de usuario"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person4Icon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                sx={styles.input}
                color="warning"
                type="email"
                placeholder="Email"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />

                        </InputAdornment>
                    )
                }}
            />

            <TextField
                sx={styles.input}
                color="warning"
                placeholder="Edad"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <ElderlyIcon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                sx={styles.input}
                color="warning"
                placeholder="DNI"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <BadgeIcon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                sx={styles.input}
                color="warning"
                type="password"
                placeholder="Contraseña"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordIcon />
                        </InputAdornment>
                    )
                }}
            />

            <TextField
                sx={styles.input}
                color="warning"
                type="password"
                placeholder="Repetir contraseña"
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordIcon />
                        </InputAdornment>
                    )
                }}
            />

        </>
    );
}

export default Modal;