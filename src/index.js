import ReactDOM from "react-dom";
import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header";
import Overlay from "./Overlay";
import Footer from "./Footer/Footer";

function App() {
  const [controleBotao, setControleBotao] = React.useState(false);
  const [pratosSelecionado, setPratosSelecionado] = React.useState([]);
  const [bebidasSelecionado, setBebidasSelecionado] = React.useState([]);
  const [sobremesasSelecionado, setSobremesasSelecionado] = React.useState([]);

  return (
    <>
      <Overlay />

      <Header />

      <Menu
        controleBotao={controleBotao}
        setControleBotao={setControleBotao}
        pratosSelecionado={pratosSelecionado}
        setPratosSelecionado={setPratosSelecionado}
        bebidasSelecionado={bebidasSelecionado}
        setBebidasSelecionado={setBebidasSelecionado}
        sobremesasSelecionado={sobremesasSelecionado}
        setSobremesasSelecionado={setSobremesasSelecionado}
      />

      <Footer
        controleBotao={controleBotao}
        setControleBotao={setControleBotao}
        pratosSelecionado={pratosSelecionado}
        bebidasSelecionado={bebidasSelecionado}
        sobremesasSelecionado={sobremesasSelecionado}
      />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
