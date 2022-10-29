import React from "react";
import { useState, useEffect } from "react";

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

    const [data, getData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("http://localhost:8080/users")
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }


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
                                        {data.map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        ))}
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
