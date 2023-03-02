import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
   return (
      <section className="formulario">
         <form>
            <h2>Preencha os dados para criar o card do campeão de Dota:</h2>
            <CampoTexto
               label="Campeão"
               placeholder="Digite o nome do campeão"
            />
            <CampoTexto
               label="Alcance de ataque"
               placeholder="Digite se o campeão tem Ranged ou Melee"
            />
            <CampoTexto
               label="Imagem"
               placeholder="Digite o endereço da imagem do campeão"
            />
         </form>
      </section>
   )
};

export default Formulario;
