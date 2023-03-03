import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";

function App() {
   const [campeoes, setCampeoes] = useState([]);

   const aoNovoCampeaoAdicionado = (campeao) => {
      console.log(campeao);
      setCampeoes([...campeoes, campeao]);
   };

   return (
      <div className="App">
         <Banner />
         <Formulario
            aoCampeaoCadastrado={(campeao) => aoNovoCampeaoAdicionado(campeao)}
         />
      </div>
   );
}

export default App;
