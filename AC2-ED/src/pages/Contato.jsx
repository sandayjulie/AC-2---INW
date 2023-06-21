import Login from "./Login"
import img from '../IMG/feminicidio2.png'
import NavProjeto from "../components/NavProjeto";
import Footer from "../components/Footer";

function Contato(){

  return (
    <div>
      
      <img src={img}
      width={210}
      height={210}
      />
      <h1 className="color">CONTATO</h1>
      <NavProjeto/> <br/>
      <container>
      <h3 className="cororo">Algo a relatar e está com medo de falar com alguém? Sua mensagem irá diretamente à polícia.</h3><br/>
    <Login/>
    </container> <br/>
    <Footer/>
    </div>
  )
}

   export default Contato;