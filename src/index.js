import ReactDOM from 'react-dom'
import Menu from './Menu/Menu'
import Header from './Header';
import Overlay from './Overlay';
import Footer from './Footer/Footer';


function App(){
  return(
    <>
    <Overlay />

    <Header />

    <Menu />

    <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));