import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';

function App() {

  const nome = 'Carmelita';

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name = 'Danielle'/>
      <SayMyName name = {nome}/>
      <Pessoa
      nome="Danielle"
      idade="37"
      profissao="Desenvolvedora"
      foto= "https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
