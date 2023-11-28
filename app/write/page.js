'use client'

import ReactQuill from "react-quill";
import {Col, Container, Form, InputGroup, ListGroup, ListGroupItem, Row} from "react-bootstrap";
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
                            도구 영역
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    );

};
