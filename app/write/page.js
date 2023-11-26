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
                                    placeholder="제목을 입력해주세요"
                                    aria-label="기사 제목"
                                />
                            </InputGroup>
                        </Row>

                        <Row md={"auto"} style={{height:"500px"}} >
                                <ReactQuill style={{height:"90%",width:"100%"}}/>
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
