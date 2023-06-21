import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return ( 
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://conaci.org.br/wp-content/uploads/2023/03/Banner_Materia_Site_DiaDaMulher_LogoCG.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>O Risco</h1>
          <h3>Em média, uma mulher é assassinada a cada 6 horas no País por ser mulher. </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://s2.glbimg.com/ZfQ79S6NPlaJ52mJQBgCvTfc2ec=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/U/bozuYTQhOyTThOBVmBCg/sc-violencia-mulher-banner-1600x900px.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Ajude!</h1>
          <h3>Em briga de marido e mulher se mete sim a colher.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width={100}
          height={900}
          src="https://www.gazetasaomateus.com.br/wp-content/uploads/2019/06/0307_campanhaviolencia1103.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Diga não!</h1>
          <h3>Todas elas são mães, irmãs, primas, filhas, tias e avós!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;