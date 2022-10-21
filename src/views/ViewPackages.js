import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function ViewPackage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Card>                               {/* Package  details table for client side */}
                            <Card.Header>
                                <Card.Title as="h4">Package Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th className="border-0">Package ID</th>
                                            <th className="border-0">Package Type</th>
                                            <th className="border-0">Price</th>
                                            <th className="border-0">Group Members Count</th>
                                            <th className="border-0">Activities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Dakota Rice</td>
                                            <td>$36,738</td>
                                            <td>Niger</td>
                                            <td>Oud-Turnhout</td>
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

export default ViewPackage;
