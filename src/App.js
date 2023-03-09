// Style
import './sass/App.scss';
// Components
import NavB from './components/NavB';
import Gallery from './components/Gallery';
import Foot from './components/Foot';
import UpButton from './components/UpButton';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <NavB></NavB>
      <Welcome title="Bienvenidos a mi pagina de ventas" text="Esta pagina fue creada con fines de demostración, el contenido mostrado en la misma no me pertenece">
      </Welcome>
      <UpButton></UpButton>
      <Gallery id="seccion1" section_name="Rifles" categoria="rifles"/>
      <Gallery id="seccion2" section_name="Escopetas" categoria="escopetas"/>
      <Gallery id="seccion3" section_name="Pistolas" categoria="pistolas"/>
      <Gallery id="seccion4" section_name="Subfusiles" categoria="subfusiles"/>
      <Foot/>
    </div>
  );
}

export default App;
