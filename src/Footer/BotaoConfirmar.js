export default function BotaoConfirmar(props) {
  const {
    controleBotao,
    setControleBotao,
    pratosSelecionado,
    bebidasSelecionado,
    sobremesasSelecionado,
  } = props;

  let mensagem = "Olá, gostaria de fazer o pedido:\n*-Prato* : "
  let total = 0 ;
  pratosSelecionado.forEach((e)=>mensagem+=`\n -${e.nome} (${e.qtd}x)`)
  mensagem += "\n*-Bebidas* :"
  bebidasSelecionado.forEach((e)=>mensagem+=`\n -${e.nome} (${e.qtd}x)`)
  mensagem += "\n*-Sobremesas* :"
  sobremesasSelecionado.forEach((e)=>mensagem+=`\n -${e.nome} (${e.qtd}x)`)
  pratosSelecionado.forEach((e)=>total+= (e.qtd)*Number((e.preco).replace("R$ ","").replace(",",".")))
  bebidasSelecionado.forEach((e)=>total+= (e.qtd)*Number((e.preco).replace("R$ ","").replace(",",".")))
  sobremesasSelecionado.forEach((e)=>total+= (e.qtd)*Number((e.preco).replace("R$ ","").replace(",",".")))
  mensagem += `\n*-Total:* R$ ${total.toFixed(2)}`
  mensagem = encodeURIComponent(mensagem)
  const mensagemFinal=`https://wa.me/5521979507925?text=${mensagem}`

  console.log(mensagem);
  if (controleBotao) {
    return (
      <a href={mensagemFinal} class="fazer-pedido ativo" target="_blank">
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
