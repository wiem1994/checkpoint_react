import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./BlocImages.css";

function BlocImages() {
    return (
        <div class="row mt-4">
            <h1>Cupcake Lover</h1>
            <Container>
                <Row className="row mt-4">
                    <Col className="row mt-4">
                        <Image src="one.jpg" rounded />
                    </Col>
                    <Col className="row mt-4">
                        <Image src="two.jpg" rounded />
                    </Col>
                </Row>
                <Row class="row mt-4">
                    <Col className="row mt-4">
                        <Image src="three.jpg" rounded />
                    </Col>
                    <Col className="row mt-4">
                        <Image src="four.jpg" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BlocImages;
