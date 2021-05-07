import Opcao from "./Opcao"

export default function Sobremesas(props) {
  const{sobremesasSelecionado,setSobremesasSelecionado} = props;
  const opcao = [
    {
      titulo: "Pudim",
      preco: "R$ 7,90",
      descricao: "Apenas um pudim",
      imgUrl:"img/pudim.png"
    },
    {
      titulo: "Mousse",
      preco: "R$ 6,90",
      descricao: "Cremoso, gostoso",
      imgUrl:"img/pudim.png"
    },
    {
      titulo: "Brownie",
      preco: "R$ 4,90",
      descricao: "É um bolinho",
      imgUrl:"img/pudim.png"
    },
  ];
  return (
    <>
      {opcao.map((e) => (
        <Opcao titulo={e.titulo} preco={e.preco} descricao={e.descricao} imgUrl={e.imgUrl} selecionado={sobremesasSelecionado} setSelecionado={setSobremesasSelecionado}/>
      ))}
    </>
  );
}
