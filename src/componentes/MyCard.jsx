import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Tags from './Tags'
const Carta = ({nombre, img, desc, color, texto}) =>{
    return (
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={img} className='object-fit-cover imagen'/>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text className='tamañoTexto'>
            {desc}
            </Card.Text>
            <Button variant="primary">Lo quiero Adoptar!</Button>
            <Tags color={color} raza={texto}></Tags>
        </Card.Body>
        </Card>
      );
    
}
export default Carta
