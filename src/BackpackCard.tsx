import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Backpack from './picture/backpack.png'
import './App.css'


function BackpackCard() {
    return (
        <Card style={{width: '25rem'}}>
            <Card.Img variant="top" src={Backpack}/>
            <Card.Body>
                <Card.Title id={"colorizedTitle"}>Card Title</Card.Title>
                <Card.Text>
                    A backpack is an essential accessory for anyone on the go. However, leaving your backpack unattended
                    and open can put your belongings at risk of theft. That's where the new type of backpack comes in,
                    which triggers an alarm when opened to prevent theft. The backpack looks like any other backpack,
                    but it has a small sensor built into the zipper. When the zipper is moved without the correct code
                    or card, the sensor activates and sets off a loud alarm. This backpack is a simple but effective
                    solution for those who want to protect their belongings from theft while traveling.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BackpackCard;