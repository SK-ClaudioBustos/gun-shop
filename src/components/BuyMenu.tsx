import { Offcanvas } from "react-bootstrap";
import { Button, List } from "@mui/material";
import Item from "./Item";
import "../sass/BuyMenu.scss";

interface IBuyMenuProps {
    show: boolean
    setShowBuyMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const datosPrueba = [
    {
        nombre: "AK47",
        precio: "15.000"
    },
    {
        nombre: "XM7",
        precio: "500.000"
    },
    {
        nombre: "M4A1",
        precio: "200.000"
    },
    {
        nombre: "XM7",
        precio: "500.000"
    },
    {
        nombre: "XM7",
        precio: "500.000"
    }
    // {
    //     nombre: "XM7",
    //     precio: "500.000"
    // },
    // {
    //     nombre: "XM7",
    //     precio: "500.000"
    // }
]

const style = {
    list: {
        width: '100%',
        height: "100%",
        position: 'relative',
        overflow: 'auto',
        paddingBottom: "0",
        '&::-webkit-scrollbar': {
            width: '5px'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'none',
            webkitBoxShadow: 'none'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#fff',
            outline: 'none'
          }
      }
};

const BuyMenu = (props: IBuyMenuProps) => {
    const { show, setShowBuyMenu } = props;
    const handleClose = () => { setShowBuyMenu(false) }
    return (
        <Offcanvas id="canvas" show={show} onHide={handleClose} backdrop={false} scroll={true} placement={"end"}>
            <Offcanvas.Header id="shop-canvas-header">
                <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="shop-canvas-content">
                    <List sx={style.list} component="nav" subheader={<li />} aria-label="items">
                    {
                        datosPrueba.map((item, key) => (
                            <Item nombre={item.nombre} precio={item.precio} key={key}/>
                        ))
                    }
                    </List>
                </div>
                <div className="d-flex justify-content-around mt-2">
                    <Button onClick={handleClose} variant="text" color="success">
                        Realizar Compra
                    </Button>
                    <Button onClick={handleClose} variant="text" color="error">
                        Cerrar
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default BuyMenu