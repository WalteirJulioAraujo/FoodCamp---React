import BotaoConfirmar from "./BotaoConfirmar";

export default function Footer(props) {
  const {
    controleBotao,
    setControleBotao,
    pratosSelecionado,
    bebidasSelecionado,
    sobremesasSelecionado,
  } = props;
  return (
    <div class="footer">
      <BotaoConfirmar
        controleBotao={controleBotao}
        setControleBotao={setControleBotao}
        pratosSelecionado={pratosSelecionado}
        bebidasSelecionado={bebidasSelecionado}
        sobremesasSelecionado={sobremesasSelecionado}
      />
    </div>
  );
}
