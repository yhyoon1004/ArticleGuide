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
import axios from "axios";
import {log} from "next/dist/server/typescript/utils";

export default function ArticleWriter() {

    const [title,setTitle] = useState("")
    const [content, setContent] = useState([]);
    const [category, setCategory] = useState("");
    const [keyword, setKeyword] = useState("");
    const [byline, setByline] = useState("");
    const [summary, setSummary] = useState("");

    const titleHandler = function (e) {
        setTitle(e.target.value);
    };
    const contentHandler = (content, delta, source, editor) => {
        setContent(content);
    };
    const categoryHandler = function (e) {
        setCategory(e.target.value);
    };
    const keywordHandler = function (e) {
        setKeyword(e.target.value);
    };
    const bylineHandler = function (e) {
        setByline(e.target.value);
    };
    const summaryHandler = function (e) {
        setSummary(e.target.value);
    };


    const articleSend = async function () {
        await axios.post("http://localhost:8080/article/create",
            {
                    "articleId": null,
                    "title": title,
                    "content": content,
                    "summary": summary,
                    "category": category,
                    "keyword": keyword,
                    "byline": byline,
            }
        ).then();

    };
    const test = function () {
        console.log(JSON.stringify({
            "articleId": 0,
            "title": title,
            "content": content,
            "summary": summary,
            "category": category,
            "keyword": keyword,
            "byline": byline,
        }))
    };
    /**
     * 포멧 문서 -> https://quilljs.com/docs/formats/
     * */
    const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "align", "color", "background",];

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
                                value={title}
                                onChange={titleHandler}
                            />
                        </InputGroup>
                    </Row>

                    <Row md={"auto"} style={{height: "500px"}}>
                        <ReactQuill
                            theme="snow"
                            style={{height: "90%", width: "100%"}}
                            value={content}
                            formats={formats}
                            modules={modules}
                            onChange={contentHandler}
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
                                    <FormSelect aria-label="Default select example" onChange={categoryHandler}>
                                        <option>기사 분야</option>
                                        <option value="정치">정치</option>
                                        <option value="경제">경제</option>
                                        <option value="산업">산업</option>
                                        <option value="사회">사회</option>
                                        <option value="전국">전국</option>
                                        <option value="세계">세계</option>
                                        <option value="연예">연예</option>
                                        <option value="스포츠">스포츠</option>
                                    </FormSelect>
                                </Col>

                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FormLabel>기사내용 요약</FormLabel>
                            <FormControl style={{minHeight:"200px"}} as={"textarea"} placeholder={"500자 내외"} onChange={summaryHandler}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FormLabel>Keyword (키워드)</FormLabel>
                            <FormControl placeholder={"',' 구분 -> 누리호,위성발사"} onChange={keywordHandler}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FormLabel>Byline (바이라인)</FormLabel>
                            <FormControl placeholder={"작성 기자명 -> 홍길동"} onChange={bylineHandler}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    <Button className={"me-1"} variant="secondary" onClick={test}>임시 저장</Button>
                                    <Button variant="success" >예약 송고</Button>
                                </Col>
                            </Row>
                            <Row className={"mt-1"}>
                                <Col>
                                    <Button className={"me-1"} variant="danger">작성 취소</Button>
                                    <Button onClick={articleSend}>기사 송고</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    );

};
