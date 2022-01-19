import './App.css';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';

function App() {

  const nome = 'Carmelita';

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName name = 'Matheus'/>
      <SayMyName name = 'Danielle'/>
      <SayMyName name = {nome}/>
      <Pessoa
      nome="Danielle"
      idade="37"
      profissao="Desenvolvedora"
      foto= "https://ichef.bbci.co.uk/news/800/cpsprodpb/9FC7/production/_100630904_mulhertech.jpg.webp"
      />
       <Pessoa
      nome="Maria"
      idade="45"
      profissao="Vendedora"
      foto= "https://ichef.bbci.co.uk/news/800/cpsprodpb/2A97/production/_100630901_mulher.jpg.webp"
      />
    </div>
  );
}

export default App;
