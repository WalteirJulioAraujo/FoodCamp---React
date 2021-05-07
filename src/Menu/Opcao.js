import React from "react";

export default function Opcao(props) {
  const { selecionado, setSelecionado } = props;
  const [Classe, setClasse] = React.useState("opcao");
  const [Contador, setContador] = React.useState(1);

  function selecionar() {
    if (Classe == "opcao") {
      setClasse("opcao selecionado");
      setSelecionado([
        ...selecionado,
        { nome: props.titulo, preco: props.preco, qtd: 1 },
      ]);
    }
    if (Contador === 0) {
      setContador(1);
    }
  }

  function aumentarContador(titulo) {
    setContador(Contador + 1);
    const array = selecionado.filter((e) => e.nome != titulo);
    setSelecionado([
      ...array,
      { nome: props.titulo, preco: props.preco, qtd: Contador + 1 },
    ]);
  }

  function diminuirContador(titulo) {
    if (Contador === 0) {
      return;
    } else {
      setContador(Contador - 1);
      if (Contador === 1) {
        setClasse("opcao");
        setSelecionado(selecionado.filter((e) => e.nome != titulo));
      }
    }
  }

  function verificar() {
    console.log(selecionado);
  }

  return (
    <>
      <div class={Classe} onClick={selecionar}>
        <img src="img/frango_yin_yang.png" />
        <button onClick={verificar}>Verificar</button>
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="preco">{props.preco}</div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
          <div class="contador">
            <button
              class="menos"
              onClick={() => diminuirContador(props.titulo)}
            >
              -
            </button>
            <div class="contadorVisual">{Contador}</div>
            <button class="mais" onClick={() => aumentarContador(props.titulo)}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
