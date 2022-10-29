import React from "react";
import { useState, useEffect } from "react";

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
    const [data, getData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("http://localhost:8081/packages")
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
                                            <th className="border-0">About the package</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.packageID}</td>
                                                <td>{item.packageType}</td>
                                                <td>{item.price}</td>
                                                <td>{item.noOfPeople}</td>
                                                <td>{item.activity}</td>
                                                <td>{item.aboutPackage}</td>


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

export default ViewPackage;
