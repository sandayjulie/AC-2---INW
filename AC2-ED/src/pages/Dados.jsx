import NavProjeto from '../components/NavProjeto';
import Carrossel from '../components/Carrossel';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import img from '../IMG/feminicidio2.png'
import img1 from '../IMG/1.png'
import img2 from '../IMG/2.png'
import img3 from '../IMG/3.png'
import img4 from '../IMG/4.png'
import img5 from '../IMG/5.png'
import img6 from '../IMG/6.png'
import img7 from '../IMG/7.png'


function Dados() {
  return (
    <div>
      <img src={img}
      width={210}
      height={210}
      />
      <h1 className='color'>DADOS</h1>
      <NavProjeto/>
      <Carrossel /> <br/>
      <h2 className='colores'>Dados Sobre o Feminicídio</h2> <br/>

      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Text className='titcard'>
          Vítimas De Feminicídio Por Mês
          </Card.Text>
          <Card.Text>
          Gráfico que representa a estatística de vítimas de feminicídio por mês:
          </Card.Text>
          <Card.Img variant="bottom" src={img1}/>
        </Card.Body>
      </Card>

      <br />

      <Card className="bg-dark text-white">
        <Card.Body>
        <Card.Text className='titcard'>
          Vítimas De Feminicídio Por Ano
          </Card.Text>
          <Card.Text>
          Gráfico que representa a estatística de vítimas de feminicídio por ano:
          </Card.Text>
        <Card.Img variant="bottom" src={img2} />
        </Card.Body>
      </Card>

      <br />

      <Card className="bg-dark text-white">
        <Card.Body>
        <Card.Text className='titcard'>
          Raças Das Vítimas De Feminicídio
          </Card.Text>
          <Card.Text>
          Gráfico que representa a estatística das raças das vítimas de feminicídio:
          </Card.Text>
        <Card.Img variant="bottom" src={img3} />
        </Card.Body>
      </Card>

      <br/>

      <Card className="bg-dark text-white">
        <Card.Body>
        <Card.Text className='titcard'>
          Municípios Com a Maior Quantidade de Vítimas de Feminicídio
          </Card.Text>
          <Card.Text>
          Gráfico que representa a estatística dos município com a maior quantidade de vítimas de feminicídio:
          </Card.Text>
        <Card.Img variant="bottom" src={img4} />
        </Card.Body>
      </Card>

      <br/>

      <Card className="bg-dark text-white">
        <Card.Body>
        <Card.Text className='titcard'>
          Raças Que Mais Sofrem de Feminicídio no Município de Campinas
          </Card.Text>
          <Card.Text>
          Gráfico que representa a estatística das raças que mais sofrem de feminicídio no município de Campinas:
          </Card.Text>
        <Card.Img variant="bottom" src={img5} />
        </Card.Body>
      </Card>

      <br />

<Card className="bg-dark text-white">
  <Card.Body>
  <Card.Text className='titcard'>
    Vítimas de Feminicídio por Mês em Campinas
    </Card.Text>
    <Card.Text>
    Gráfico que representa a estatística das vítimas de feminicídio no município de Campinas por mês:
    </Card.Text>
  <Card.Img variant="bottom" src={img6} />
  </Card.Body>
</Card>

<br/>

<Card className="bg-dark text-white">
  <Card.Body>
  <Card.Text className='titcard'>
  Vítimas de Feminicídio por Ano em Campinas
    </Card.Text>
    <Card.Text>
    Gráfico que representa a estatística das vítimas de feminicídio no município de Campinas por mês:
    </Card.Text>
  <Card.Img variant="bottom" src={img7} />
  </Card.Body>
</Card>

<br />

      <Footer/>
      </div>
  );
}

export default Dados;