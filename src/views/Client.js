import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function Client() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Card>                               {/*Client details table */}
                            <Card.Header>
                                <Card.Title as="h4">Client Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Client ID</th>
                                            <th className="border-0">Name</th>
                                            <th className="border-0">E-mail</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Dakota Rice</td>
                                            <td>$36,738</td>

                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Client;
