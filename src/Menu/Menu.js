import React from "react";

import SecaoBebidas from "./SecaoBebidas.js";
import SecaoPratos from "./SecaoPratos";
import SecaoSobremesas from "./SecaoSobremesas";

export default function Menu(props) {
  const {
    pratosSelecionado,
    setPratosSelecionado,
    bebidasSelecionado,
    setBebidasSelecionado,
    sobremesasSelecionado,
    setSobremesasSelecionado,
  } = props;


  if (
    pratosSelecionado.length > 0 &&
    bebidasSelecionado.length > 0 &&
    sobremesasSelecionado.length > 0
  ) {
    props.setControleBotao(true);
  } else {
    props.setControleBotao(false);
  }

  return (
    <div class="menu">
      <SecaoPratos
        pratosSelecionado={pratosSelecionado}
        setPratosSelecionado={setPratosSelecionado}
      />

      <SecaoBebidas
        bebidasSelecionado={bebidasSelecionado}
        setBebidasSelecionado={setBebidasSelecionado}
      />

      <SecaoSobremesas
        sobremesasSelecionado={sobremesasSelecionado}
        setSobremesasSelecionado={setSobremesasSelecionado}
      />
    </div>
  );
}
