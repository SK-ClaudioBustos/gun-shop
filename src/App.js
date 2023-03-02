// Style
import './sass/App.scss';
// Components
import NavB from './components/NavB';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <NavB></NavB>
      <Gallery section_name={"Seccion 1"}/>
      <Gallery section_name={"Seccion 2"}/>
      <Gallery section_name={"Seccion 3"}/>
      <Gallery section_name={"Seccion 4"}/>
    </div>
  );
}

export default App;
