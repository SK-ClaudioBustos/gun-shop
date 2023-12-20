import { Button } from "@mui/material";
import { Offcanvas } from "react-bootstrap";
import Lista from "./Lista";
import "../sass/BuyMenu.scss";
import { ItemCarrito } from "../types";

interface IBuyMenuProps {
    show: boolean
    itemList: ItemCarrito[]
    setShowBuyMenu: React.Dispatch<React.SetStateAction<boolean>>
    setItemList: (value: React.SetStateAction<ItemCarrito[]>) => void
}

const BuyMenu = (props: IBuyMenuProps) => {
    const { show, itemList, setShowBuyMenu, setItemList } = props;
    const handleClose = () => { setShowBuyMenu(false) }
    return (
        <Offcanvas id="canvas" show={show} onHide={handleClose} backdrop={false} scroll={true} placement={"end"}>
            <Offcanvas.Header id="shop-canvas-header">
                <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="shop-canvas-content">
                    <Lista itemList={itemList} setItemList={setItemList}/>
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