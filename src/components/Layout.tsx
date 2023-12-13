import NavB from './NavB';
import Gallery from './Gallery';
import Foot from './Foot';
import UpButton from './UpButton';
import Welcome from './Welcome';
import ShopButton from './ShopButton';
import { useState } from 'react';
import DialogModal from './DialogModal';
import { DialogData } from '../types';

const Layout = () => {
  const [dialogState, setDialogState] = useState<DialogData>({ show: false, titulo: "" });
  const changeState = (props: DialogData) => {
    setDialogState({ ...props });
  }
  return (
    <>
      <NavB changeDialogState={changeState}/>
      <DialogModal dialogState={dialogState} changeDialogState={changeState}/>
      <Welcome title="Bienvenidos a mi pagina de ventas" text="Esta pagina fue creada con fines de demostración, el contenido mostrado en la misma no me pertenece" />
      <UpButton />
      <ShopButton />
      <Gallery id="seccion1" sectionName="Rifles" categoria="rifles" />
      <Gallery id="seccion2" sectionName="Escopetas" categoria="escopetas" />
      <Gallery id="seccion3" sectionName="Pistolas" categoria="pistolas" />
      <Gallery id="seccion4" sectionName="Subfusiles" categoria="subfusiles" />
      <Foot />
    </>
  )
}

export default Layout