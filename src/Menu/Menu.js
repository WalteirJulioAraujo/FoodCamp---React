import SecaoBebidas from "./SecaoBebidas.js"
import SecaoPratos from "./SecaoPratos"
import SecaoSobremesas from "./SecaoSobremesas"

export default function Menu() {
  return (
    <div class="menu">
      <SecaoPratos />

      <SecaoBebidas />

      <SecaoSobremesas />
    </div>
  );
}
