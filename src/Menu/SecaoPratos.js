import Pratos from "./Pratos";

export default function SecaoPratos(props){
    const {pratosSelecionado,setPratosSelecionado} = props;
    return(
        <div class="secao">
        <div class="titulo">Primeiro, seu prato</div>
        <div class="opcoes pratos">
            <Pratos pratosSelecionado={pratosSelecionado} setPratosSelecionado={setPratosSelecionado}/>
        </div>
        </div>
    )
}