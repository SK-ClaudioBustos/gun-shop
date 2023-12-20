import NavB from './NavB';
import Gallery from './Gallery';
import Foot from './Foot';
import UpButton from './UpButton';
import Welcome from './Welcome';
import ShopButton from './ShopButton';
import { useState } from 'react';
import DialogModal from './DialogModal';
import { DialogData } from '../types';
import dataSections from '../data/sections';
import BuyMenu from './BuyMenu';

const Layout = () => {
  const [dialogState, setDialogState] = useState<DialogData>({ show: false, titulo: "" });
  const changeState = (props: DialogData) => {
    setDialogState({ ...props });
  }
  const data = dataSections;
  const [showBuyMenu, setShowBuyMenu] = useState(false);
  return (
    <div id='layout'>
      <NavB changeDialogState={changeState}/>
      <DialogModal dialogState={dialogState} changeDialogState={changeState}/>
      <Welcome title="Bienvenidos a mi pagina de ventas" text="Esta pagina fue creada con fines de demostración, el contenido mostrado en la misma no me pertenece" />
      <UpButton />
      <ShopButton setShow={setShowBuyMenu}/>
      { showBuyMenu &&
        <BuyMenu show={showBuyMenu} setShowBuyMenu={setShowBuyMenu}/>
      }
      {
        data.map((section) => (
          <Gallery key={section.id} id={section.id} sectionName={section.sectionName} categoria={section.categoria} />
        ))
      }
      <Foot />
    </div>
  )
}

export default Layout