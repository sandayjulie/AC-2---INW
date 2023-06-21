//import  Button from 'react-bootstrap/Button';
import NavProjeto from '../components/NavProjeto';
import Carrossel from '../components/Carrossel';   
import Footer from '../components/Footer';
import img from '../IMG/feminicidio2.png'
import '../App.css';
import Sobre from '../components/Produtos';
import Prot from '../components/Proteção';

function Home() {

  return (
    <div>
      <img src={img}
      width={210}
      height={210}
      />
      <h1 className='color'>HOME</h1>
      <NavProjeto/>
      <Carrossel /> <br/>
    <h2 className='colores'>O Feminicídio</h2> <br/>
      <Sobre/> <br/>
      <Prot/> <br/>
    <Footer/>

    </div>
  )
}

export default Home;