import Card from 'react-bootstrap/Card';
import './App.css'

function BackpackQuote() {
    return (
        <Card>
            <Card.Header id={"colorizedTitle"}>Review</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        I recently bought the alarm backpack and I'm very satisfied with my purchase. The alarm is loud and effective, giving me peace of mind when I'm on the go.{' '}
                    </p>
                    <footer className="blockquote-footer">
                         <cite title="Source Title">Mark</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default BackpackQuote;