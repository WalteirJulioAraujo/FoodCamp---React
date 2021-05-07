import React from 'react'

import SecaoBebidas from "./SecaoBebidas.js"
import SecaoPratos from "./SecaoPratos"
import SecaoSobremesas from "./SecaoSobremesas"

export default function Menu() {
  const[pratosSelecionado,setPratosSelecionado]=React.useState([]);
  const[bebidasSelecionado,setBebidasSelecionado]=React.useState([]);
  const[sobremesasSelecionado,setSobremesasSelecionado]=React.useState([]);

  if(pratosSelecionado.length>0 && bebidasSelecionado.length>0 && sobremesasSelecionado.length>0){
    console.log('koe')
  }

  return (
    <div class="menu">
      <SecaoPratos pratosSelecionado={pratosSelecionado} setPratosSelecionado={setPratosSelecionado}/>

      <SecaoBebidas bebidasSelecionado={bebidasSelecionado} setBebidasSelecionado={setBebidasSelecionado}/>

      <SecaoSobremesas sobremesasSelecionado={sobremesasSelecionado} setSobremesasSelecionado={setSobremesasSelecionado}/>
    </div>
  );
}

