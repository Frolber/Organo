import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
   const atributos = ["Força", "Agilidade", "Inteligência"];

   const aoSalvar = (evento) => {
      evento.preventDefault();
      console.log("Form foi submetido");
   };

   return (
      <section className="formulario">
         <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do campeão de Dota:</h2>
            <CampoTexto
               obrigatorio={true}
               label="Campeão"
               placeholder="Digite o nome do campeão"
            />
            <CampoTexto
               obrigatorio={true}
               label="Alcance de ataque"
               placeholder="Digite se o campeão tem Ranged ou Melee"
            />
            <CampoTexto
               obrigatorio={true}
               label="Imagem"
               placeholder="Digite o endereço da imagem do campeão"
            />
            <ListaSuspensa
               obrigatorio={true}
               label="Atributo do campeão:"
               itens={atributos}
            />
            <Botao>Criar card</Botao>
         </form>
      </section>
   );
};

export default Formulario;
