import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = (props) => {
   const atributos = ["Força", "Agilidade", "Inteligência"];

   const [nome, setNome] = useState("");
   const [alcanceAtq, setAlcanceAtq] = useState("");
   const [imagem, setImagem] = useState("");
   const [atributo, setAtributo] = useState("");

   const aoSalvar = (evento) => {
      evento.preventDefault();
      props.aoCampeaoCadastrado(
         {
            nome,
            alcanceAtq,
            imagem,
            atributo
         }
      )
   };

   return (
      <section className="formulario">
         <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do campeão de Dota:</h2>
            <CampoTexto
               obrigatorio={true}
               label="Campeão"
               placeholder="Digite o nome do campeão"
               valor={nome}
               aoAlterado={(valor) => setNome(valor)}
            />
            <CampoTexto
               obrigatorio={true}
               label="Alcance de ataque"
               placeholder="Digite se o campeão tem Ranged ou Melee"
               valor={alcanceAtq}
               aoAlterado={(valor) => setAlcanceAtq(valor)}
            />
            <CampoTexto
               obrigatorio={true}
               label="Imagem"
               placeholder="Digite o endereço da imagem do campeão"
               valor={imagem}
               aoAlterado={(valor) => setImagem(valor)}
            />
            <ListaSuspensa
               obrigatorio={true}
               label="Atributo do campeão:"
               itens={atributos}
               valor={atributo}
               aoAlterado={(valor) => setAtributo(valor)}
            />
            <Botao>Criar card</Botao>
         </form>
      </section>
   );
};

export default Formulario;
