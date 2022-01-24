import './App.css';
import ApiWeather from './components/ApiWeather';
import EstadoFuncionales from './components/EstadoFuncionales';

function App() {
  return (
    <div className="App App-header">
      {/* <EstadoFuncionales /> */}
      <ApiWeather />
    </div>
  );
}

export default App;