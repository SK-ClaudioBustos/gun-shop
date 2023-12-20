import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface IItemProps {
    precio: string
    nombre: string
}

const style = {
    item: { backgroundColor: "#282828"}
}

const Item = (props: IItemProps) => {
    const { precio, nombre } = props;
    return (
        <>
            <ListItem disablePadding sx={style.item}>
                <ListItemButton>
                    <ListItemText primary={nombre} secondary={"$" + precio} secondaryTypographyProps={{ color: "#fff" }}/>
                </ListItemButton>
            </ListItem>
            <Divider light={true} />
        </>
    )
}

export default Item;