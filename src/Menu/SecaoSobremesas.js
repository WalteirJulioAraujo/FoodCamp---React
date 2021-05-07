import Sobremesas from "./Sobremesas"

export default function SecaoSobremesas(props){
  const{sobremesasSelecionado,setSobremesasSelecionado} = props;
    return(
        <div class="secao">
        <div class="titulo">Por fim, sua sobremesa</div>
        <div class="opcoes sobremesas">
          <Sobremesas sobremesasSelecionado={sobremesasSelecionado} setSobremesasSelecionado={setSobremesasSelecionado}/>
        </div>
      </div>
    );
}