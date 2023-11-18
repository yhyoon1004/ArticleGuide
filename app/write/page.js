'use client'

import ReactQuill from "react-quill";
import {
    Card,
    Col,
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    InputGroup,
    ListGroup, ListGroupItem,
    Row
} from "react-bootstrap";

export default function ArticleWriter () {
    return (
        <Container fluid={true}>
            <Row className="mt-2">
                <Col md={8}>
                    <Row md={"auto"} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">기사 제목</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                            <div style={{height:"150px"}}>
                                <ReactQuill style={{width:"100%",height:"100%"}}/>
                            </div>
                    </Row>
                </Col>
                <Col md={4}>
                  <ListGroup>
                    <ListGroupItem>
                        도구 영역
                    </ListGroupItem>
                  </ListGroup>
                </Col>
            </Row>
        </Container>
    );

};
