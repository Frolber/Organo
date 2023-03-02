import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
   return (
      <div className="App">
         <Banner />
         <CampoTexto label="Campeão"  placeholder="Digite o nome do campeão" />
         <CampoTexto label="Alcance de ataque" placeholder="Digite se o campeão tem Ranged ou Melee" />
         <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem do campeão"/>
      </div>
   );
}

export default App;
