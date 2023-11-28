'use client'
import {Breadcrumb, Container, Row} from "react-bootstrap";

export default function IndexBreadCrumbs () {



    return(
        <Container fluid={true}>
            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        </Container>
    )
};