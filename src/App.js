// Style
import './sass/App.scss';
// Components
import NavB from './components/NavB';
import Gallery from './components/Gallery';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
      <NavB></NavB>
      <Gallery id="seccion1" section_name="Rifles" categoria="rifles"/>
      <Gallery id="seccion2" section_name="Escopetas" categoria="escopetas"/>
      <Gallery id="seccion3" section_name="Pistolas" categoria="pistolas"/>
      <Gallery id="seccion4" section_name="Subfusiles" categoria="subfusiles"/>
      <Foot/>
    </div>
  );
}

export default App;
