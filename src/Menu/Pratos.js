import Opcao from './Opcao';

export default function Pratos() {
  const opcao= [
    { titulo: "Frango", preco: "R$ 14,90",descricao:"Um pouco de batata, um pouco de salada" },
    { titulo: "Carne", preco: "R$ 16,90",descricao:"Um pouco de batata, um pouco de salada" },
    { titulo: "Peixe", preco: "R$ 17,90",descricao:"Um pouco de batata, um pouco de salada" },
  ];
  
  return (
    <>
      {opcao.map((e)=> <Opcao titulo={e.titulo} preco={e.preco} descricao={e.descricao} />)}
    </>
  );
}
