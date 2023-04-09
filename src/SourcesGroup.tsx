import {ListGroup} from "react-bootstrap";

function SourcesGroup() {
    return (
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item>
                    <h1>Sources</h1>
                </ListGroup.Item>
                <ListGroup.Item action href="https://react-bootstrap.github.io/components/alerts">
                    Common Components (React Bootstrap Default Page)
                </ListGroup.Item>
                <ListGroup.Item action href="https://codemyui.com/parallax-pixel-stars-using-pure-css/">
                    Stars Background (CodeMyui)
                </ListGroup.Item>
                <ListGroup.Item action href="https://www.svgrepo.com/">
                    Pre-made SVGs (SVGRepo)
                </ListGroup.Item>
                <ListGroup.Item action href="https://chat.openai.com/chat">
                    Texts (ChatGPT)
                </ListGroup.Item>
                <ListGroup.Item action href="https://stablediffusionweb.com/#demo">
                    Images (StableDiffusion)
                </ListGroup.Item>
            </ListGroup>
        );
}

export default SourcesGroup;