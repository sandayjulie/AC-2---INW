import Card from 'react-bootstrap/Card';

function Sobre() {
  return (
    <Card className="bg-dark text-white">
        <Card.Title className='titcard'>O que é feminicídio?</Card.Title>
        <Card.Text>
        Feminicídio é um termo utilizado para descrever o assassinato de mulheres por razões de gênero. Diferencia-se dos outros tipos de homicídio ou assassinato devido ao fato de que as mulheres são alvo desses crimes devido à sua condição de gênero, manifestando-se como uma forma extrema de violência de gênero. O feminicídio ocorre quando uma mulher é morta simplesmente por ser mulher, seja por questões de misoginia, discriminação, controle, poder ou por violência doméstica.
        </Card.Text>
        <Card.Text>
Esse termo foi criado para destacar a natureza discriminatória e sistemática desses assassinatos, buscando chamar a atenção para a violência de gênero e promover a conscientização sobre a necessidade de prevenir e combater essa forma de violência. O feminicídio é um grave problema social e violação dos direitos humanos, e é importante buscar medidas para prevenir, punir e erradicar essa violência, promovendo a igualdade de gênero e o respeito aos direitos das mulheres.
        </Card.Text>
        <Card.Img variant="bottom" src="https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/mulher-ameacada-com-uma-arma-silhueta-291601031463161800.jpg" 
        width={500}
        height={500}/>
    </Card>
  );
}

export default Sobre;