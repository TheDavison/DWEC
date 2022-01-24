import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Estado from './components/Estado';
import Tarjeta from './components/Tarjeta';
import ImagenesAleatorias from './components/ImagenesAleatorias'

const nombre = "Davison"
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const javi = {nombre: "Tuvieja", correo: "javime@gmail.com"};

function App() {
  return (
    <>
      <div className="App App-header">
        {/* <Componente  nombre={nombre}  pintar={false} objeto={javi} /> */}
        {/* meses={meses} "Mamá de manue" */}
        {/* <Estado /> */}
        {/* <Tarjeta nombreFruta = "Manzana" precio= "1.34" /> */}
        {/* <Tarjeta nombreFruta = "Mandarina" precio= "2.11" />
        <Tarjeta nombreFruta = "Limón" precio= "3.98" /> */}
        <ImagenesAleatorias nombre="Putita" size="small" num="72"/>
        <ImagenesAleatorias nombre="Putita" size="" num="32"/>
        <ImagenesAleatorias nombre="Putita" size="large" num="4"/>
      </div>
    </>
  );
}

export default App;
