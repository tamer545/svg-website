import Card from 'react-bootstrap/Card';

type QuoteProps = {
    quote: string;
    name: string;
}
function BackpackQuote({
    quote,
    name
}: QuoteProps) {
    return (
        <Card>
            <Card.Header id={"colorizedTitle"}>Review</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {quote}
                    </p>
                    <footer className="blockquote-footer">
                         <cite title="Source Title">{name}</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default BackpackQuote;