import Bebidas from "./Bebidas";

export default function SecaoBebidas(props){
  const{bebidasSelecionado,setBebidasSelecionado} = props;
    return(
        <div class="secao">
        <div class="titulo">Agora, sua bebida</div>
        <div class="opcoes bebidas">
          <Bebidas bebidasSelecionado={bebidasSelecionado} setBebidasSelecionado={setBebidasSelecionado}/>
        </div>
      </div>
    );
}
