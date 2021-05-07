import Opcao from "./Opcao"

export default function Sobremesas() {
  const opcao = [
    {
      titulo: "Pudim",
      preco: "R$ 7,90",
      descricao: "Apenas um pudim",
    },
    {
      titulo: "Mousse",
      preco: "R$ 6,90",
      descricao: "Cremoso, gostoso",
    },
    {
      titulo: "Brownie",
      preco: "R$ 4,90",
      descricao: "É um bolinho",
    },
  ];
  return (
    <>
      {opcao.map((e) => (
        <Opcao titulo={e.titulo} preco={e.preco} descricao={e.descricao} />
      ))}
    </>
  );
}
