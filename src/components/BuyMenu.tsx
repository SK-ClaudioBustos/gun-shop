import { Offcanvas } from "react-bootstrap";
import "../sass/BuyMenu.scss";
import { Button } from "@mui/material";

interface IBuyMenuProps {
    show: boolean
    setShowBuyMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const BuyMenu = (props: IBuyMenuProps) => {
    const { show, setShowBuyMenu } = props;
    const handleClose = () => { setShowBuyMenu(false) }
    return (
        <Offcanvas id="canvas" show={show} onHide={handleClose} backdrop={false} scroll={true} placement={"end"}>
            <Offcanvas.Header id="shop-canvas-header">
                <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="shop-canvas-content"></div>
                <div className="d-flex justify-content-around mt-1">
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