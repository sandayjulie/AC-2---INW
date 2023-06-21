import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" width={30}>
        <Form.Label className='lala'>Endereço de E-mail</Form.Label>
        <Form.Control className='box' type="email" placeholder="Coloque o E-mail" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='lala'>Escreva sua mensagem</Form.Label>
        <Form.Control className='box2' type="password" placeholder="Envie sua mensagem" width={400} height={300}/>
      </Form.Group>
      <Button className="bott" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Login;