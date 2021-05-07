import Pratos from "./Pratos";

export default function SecaoPratos(){
    return(
        <div class="secao">
        <div class="titulo">Primeiro, seu prato</div>
        <div class="opcoes pratos">
            <Pratos />
        </div>
        </div>
    )
}