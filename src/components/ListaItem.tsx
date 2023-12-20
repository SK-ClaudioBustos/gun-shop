import { Divider, IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface IItemProps {
    precio: string
    nombre: string
    id: string
    handleDelete: (nombre: string) => void
}

const style = {
    item: { backgroundColor: "#282828" }
}

const ListaItem = (props: IItemProps) => {
    const { id, precio, nombre, handleDelete } = props;
    return (
        <>
            <ListItem
                disablePadding
                sx={style.item}
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={ () => { handleDelete(id) }}>
                        <DeleteIcon color="error"/>
                    </IconButton>
                }>
                <ListItemButton>
                    <ListItemText
                        primary={nombre}
                        secondary={"$" + precio}
                        secondaryTypographyProps={{ color: "#fff" }} />
                </ListItemButton>
            </ListItem>
            <Divider light={true} />
        </>
    )
}

export default ListaItem;