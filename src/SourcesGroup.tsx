import {ListGroup} from "react-bootstrap";

function SourcesGroup() {
    return (
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item>
                    <h1>Sources</h1>
                </ListGroup.Item>
                <ListGroup.Item action href="https://react-bootstrap.github.io/components/alerts" className={"glow-on-hover"}>
                    Common Components (React Bootstrap Default Page)
                </ListGroup.Item>
                <ListGroup.Item action href="https://codemyui.com/parallax-pixel-stars-using-pure-css/" className={"glow-on-hover"}>
                    Stars Background (CodeMyui)
                </ListGroup.Item>
                <ListGroup.Item action href="https://www.svgrepo.com/" className={"glow-on-hover"}>
                    Pre-made SVGs (SVGRepo)
                </ListGroup.Item>
                <ListGroup.Item action href="https://chat.openai.com/chat" className={"glow-on-hover"}>
                    Texts (ChatGPT)
                </ListGroup.Item>
                <ListGroup.Item action href="https://stablediffusionweb.com/#demo" className={"glow-on-hover"}>
                    Images (StableDiffusion)
                </ListGroup.Item>
            </ListGroup>
        );
}

export default SourcesGroup;