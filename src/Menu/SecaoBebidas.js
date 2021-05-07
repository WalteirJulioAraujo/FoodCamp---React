import Bebidas from "./Bebidas";

export default function SecaoBebidas(){
    return(
        <div class="secao">
        <div class="titulo">Agora, sua bebida</div>
        <div class="opcoes bebidas">
          <Bebidas />
        </div>
      </div>
    );
}
