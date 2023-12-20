import NavB from './NavB';
import Gallery from './Gallery';
import Foot from './Foot';
import UpButton from './UpButton';
import Welcome from './Welcome';
import ShopButton from './ShopButton';
import { useState } from 'react';
import DialogModal from './DialogModal';
import { DialogData, ItemCarrito } from '../types';
import dataSections from '../data/sections';
import BuyMenu from './BuyMenu';

const Layout = () => {
  const [dialogState, setDialogState] = useState<DialogData>({ show: false, titulo: "" });
  const changeState = (props: DialogData) => {
    setDialogState({ ...props });
  }
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  const data = dataSections;
  const [itemList, setItemList] = useState<ItemCarrito[]>([]);
  const handleAddItem = (nombre: string, precio: string, id: string) => {
    setItemList([{ nombre, precio, id }, ...itemList]);
  }
  const [showUpButton, setshowUpButton] = useState(false)
  window.onscroll = function () {
    const alturaPagina = window.scrollY;
    if (alturaPagina >= 300) {
      setshowUpButton(true);
    } else {
      setshowUpButton(false);
    }
  };
  return (
    <div id='layout'>
      <NavB changeDialogState={changeState} />
      <DialogModal dialogState={dialogState} changeDialogState={changeState} />
      <Welcome title="Bienvenidos a mi pagina de ventas" text="Esta pagina fue creada con fines de demostración, el contenido mostrado en la misma no me pertenece" />
      {
        showUpButton && <UpButton />
      }
      <ShopButton setShow={setShowBuyMenu} />
      {showBuyMenu &&
        <BuyMenu itemList={itemList} show={showBuyMenu} setShowBuyMenu={setShowBuyMenu} setItemList={setItemList} />
      }
      {
        data.map((section) => (
          <Gallery key={section.id} id={section.id} sectionName={section.sectionName} categoria={section.categoria} handleAddItem={handleAddItem} />
        ))
      }
      <Foot />
    </div>
  )
}

export default Layout