export default function BotaoConfirmar(props) {
  const {
    controleBotao,
    setControleBotao,
    pratosSelecionado,
    bebidasSelecionado,
    sobremesasSelecionado,
  } = props;

  let mensagem = "Olá, gostaria de fazer o pedido:\n"
  let total = 0 ;
  pratosSelecionado.forEach((e)=>mensagem+=`Prato : ${e.nome} (${e.qtd}x)\n`)
  bebidasSelecionado.forEach((e)=>mensagem+=`Bebidas : ${e.nome} (${e.qtd}x)\n`)
  sobremesasSelecionado.forEach((e)=>mensagem+=`Sobremesas : ${e.nome} (${e.qtd}x)\n`)
  pratosSelecionado.forEach((e)=>total+=Number((e.preco).replace("R$ ","").replace(",",".")))
  bebidasSelecionado.forEach((e)=>total+=Number((e.preco).replace("R$ ","").replace(",",".")))
  sobremesasSelecionado.forEach((e)=>total+=Number((e.preco).replace("R$ ","").replace(",",".")))
  mensagem += `\nTotal: ${total.toFixed(2)}`
  mensagem = encodeURIComponent(mensagem)
  const mensagemFinal=`https://wa.me/21979507925?text=${mensagem}`

  console.log(mensagem);
  if (controleBotao) {
    return (
      <a href={mensagemFinal} class="fazer-pedido ativo">
        Fazer Pedido!
      </a>
    );
  } else {  
    return (
      <a href="#" class="fazer-pedido">
        Selecione os 3 itens <br />
        para fechar o pedido
      </a>
    );
  }
}
