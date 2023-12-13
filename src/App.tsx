import NavB from './components/NavB';
import Gallery from './components/Gallery';
import Foot from './components/Foot';
import UpButton from './components/UpButton';
import Welcome from './components/Welcome';
import ShopButton from './components/ShopButton';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <NavB/>
      <Welcome title="Bienvenidos a mi pagina de ventas" text="Esta pagina fue creada con fines de demostración, el contenido mostrado en la misma no me pertenece"/>
      <UpButton/>
      <ShopButton/>
      <Gallery id="seccion1" sectionName="Rifles" categoria="rifles"/>
      <Gallery id="seccion2" sectionName="Escopetas" categoria="escopetas"/>
      <Gallery id="seccion3" sectionName="Pistolas" categoria="pistolas"/>
      <Gallery id="seccion4" sectionName="Subfusiles" categoria="subfusiles"/>
      <Foot/>
    </div>
  );
}

export default App;
