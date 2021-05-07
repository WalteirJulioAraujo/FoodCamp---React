import Opcao from './Opcao';

export default function Bebidas(props) {
  const{bebidasSelecionado,setBebidasSelecionado} = props;
  const opcao = [
    {
      titulo: "Coquinha gelada",
      preco: "R$ 6,90",
      descricao: "Lata 350ml",
      imgUrl:"img/coquinha_gelada.png"
    },
    {
      titulo: "Guaraná gelado",
      preco: "R$ 4,90",
      descricao: "Lata 350ml",
      imgUrl:"img/coquinha_gelada.png"
    },
    {
      titulo: "Suquinho gelado",
      preco: "R$ 7,90",
      descricao: "500ml",
      imgUrl:"img/coquinha_gelada.png"
    },
  ];
  return (
    <>
      {opcao.map((e)=> <Opcao titulo={e.titulo} preco={e.preco} descricao={e.descricao} imgUrl={e.imgUrl} selecionado={bebidasSelecionado} setSelecionado={setBebidasSelecionado}/>)}
    </>
  );
}
