'use client'

import ReactQuill from "react-quill";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    FormLabel, FormSelect,
    InputGroup,
    ListGroup,
    ListGroupItem,
    Row
} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function ArticleWriter() {

    const [editorContent, setEditorContent] = useState("");
    /**
     * 포멧 문서 -> https://quilljs.com/docs/formats/
     * */
    const formats = [
        "header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "align", "color", "background",
    ];

    /**
     * 모듈 문서 -> https://quilljs.com/docs/modules/toolbar/
     */
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
            ["clean"],
        ],
    };

    const handleEditorChange = (content, delta, source, editor) => {
        setEditorContent(editor.getContents());
    };

    useEffect(() => {
        console.log(editorContent)/*테스트 용 추후 제거 요망*/
    },[editorContent]);

    return (
        <Container fluid={true}>
            <Row className="mt-2">
                <Col md={8}>
                    <Row md={"auto"}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">기사 제목</InputGroup.Text>
                            <Form.Control
                                placeholder="제목을 입력해주세요"
                                aria-label="기사 제목"
                            />
                        </InputGroup>
                    </Row>

                    <Row md={"auto"} style={{height: "500px"}}>
                        <ReactQuill
                            theme="snow"
                            style={{height: "90%", width: "100%"}}
                            value={editorContent}
                            formats={formats}
                            modules={modules}
                            onChange={handleEditorChange}
                        />
                    </Row>

                </Col>

                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem>
                            <Row className={"mb-1"}>
                                <Col>
                                    Category (카테고리)
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormSelect aria-label="Default select example">
                                        <option>기사 분야</option>
                                        <option value="1">정치</option>
                                        <option value="2">경제</option>
                                        <option value="3">산업</option>
                                        <option value="3">사회</option>
                                        <option value="3">전국</option>
                                        <option value="3">세계</option>
                                        <option value="3">연예</option>
                                        <option value="3">스포츠</option>
                                    </FormSelect>
                                </Col>

                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FormLabel>기사내용 요약</FormLabel>
                            <FormControl style={{minHeight:"200px"}} as={"textarea"} placeholder={"500자 내외"}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FormLabel>Keyword (키워드)</FormLabel>
                            <FormControl placeholder={"',' 구분 -> 누리호,위성발사"}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FormLabel>Byline (바이라인)</FormLabel>
                            <FormControl placeholder={"작성자 기자명 -> 홍길동"}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    <Button className={"me-1"} variant="secondary">임시 저장</Button>
                                    <Button variant="success" >예약 송고</Button>
                                </Col>
                            </Row>
                            <Row className={"mt-1"}>
                                <Col>
                                    <Button className={"me-1"} variant="danger">작성 취소</Button>
                                    <Button >기사 송고</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    );

};
