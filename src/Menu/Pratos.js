import Opcao from './Opcao';

export default function Pratos(props) {
  const {pratosSelecionado,setPratosSelecionado} = props;
  const opcao= [
    { titulo: "Frango Yin Yang", preco: "R$ 14,90",descricao:"Um pouco de batata, um pouco de salada" },
    { titulo: "Carne Yin Yang", preco: "R$ 16,90",descricao:"Um pouco de batata, um pouco de salada" },
    { titulo: "Peixe Yin Yang", preco: "R$ 17,90",descricao:"Um pouco de batata, um pouco de salada" },
  ];
  
  return (
    <>
      {opcao.map((e)=> <Opcao titulo={e.titulo} preco={e.preco} descricao={e.descricao} selecionado={pratosSelecionado} setSelecionado={setPratosSelecionado}/>)}
    </>
  );
}
