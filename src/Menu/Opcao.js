import React from "react";

export default function Opcao(props) {
  const [Classe, setClasse] = React.useState("opcao");
  const [Contador, setContador] = React.useState(1);

  function selecionar() {
    if (Classe == "opcao") {
      setClasse("opcao selecionado");
    }
    if(Contador===0){
        setContador(1);
    }
  }

  function aumentarControle() {
    setContador(Contador + 1);
  }

  function diminuirControle() {
    if (Contador === 0) {
      return;
    } else {
      setContador(Contador - 1);
      if (Contador === 1) {
        setClasse("opcao");
      }
    }
  }

  return (
    <>
      <div class={Classe} onClick={selecionar}>
        <img src="img/frango_yin_yang.png" />
        <div class="titulo">{props.titulo} Yin Yang</div>
        <div class="descricao">{props.descricao}</div>
        <div class="preco">{props.preco}</div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
          <div class="contador">
            <button class="menos" onClick={diminuirControle}>
              -
            </button>
            <div class="contadorVisual">{Contador}</div>
            <button class="mais" onClick={aumentarControle}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
