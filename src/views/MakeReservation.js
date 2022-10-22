import React, { useState } from "react";

// react-bootstrap components
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    Card,
    Table
} from "react-bootstrap";

function Maps() {

    const [clientId, setClientId] = useState('');
    const [packageId, setpackageId] = useState('');
    const [roomId, setroomId] = useState('');
    const [CheckInDate, setCheckInDate] = useState('');
    const [checkOutDate, setcheckOutDate] = useState('');
    const [members, setmembers] = useState('');

    function addHandler(e) {
        e.preventDefault();

        console.log(clientId, packageId, roomId, CheckInDate, checkOutDate, members)
    }

    const url = ""

    function submitHandler(e) {
        e.preventDefault();


    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Make Reservation</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={submitHandler}>          {/* Form details */}
                                <Row>
                                    <Col className="pr-1" md="5">
                                        <Form.Group>
                                            <label>Client ID</label>
                                            <Form.Control
                                                type="text"
                                                value={clientId}
                                                onChange={(e) => setClientId(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="px-1" md="3">
                                        <Form.Group>
                                            <label>Package ID</label>
                                            <Form.Control
                                                type="text"
                                                value={packageId}
                                                onChange={(e) => setpackageId(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pl-1" md="4">
                                        <Form.Group>
                                            <label>
                                                Room ID
                                            </label>
                                            <Form.Control
                                                type="text"
                                                value={roomId}
                                                onChange={(e) => setroomId(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <Form.Group>
                                            <label>Check in date</label>
                                            <Form.Control
                                                type="date"
                                                value={CheckInDate}
                                                onChange={(e) => setCheckInDate(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pl-1" md="6">
                                        <Form.Group>
                                            <label>Check out date</label>
                                            <Form.Control
                                                type="date"
                                                value={checkOutDate}
                                                onChange={(e) => setcheckOutDate(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="4">
                                        <Form.Group>
                                            <label>Number of group members</label>
                                            <Form.Control
                                                defaultValue="2"
                                                min="2"
                                                type="number"
                                                value={members}
                                                onChange={(e) => setmembers(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col >
                                        <Button
                                            className="btn-fill pull-right"
                                            variant="info"
                                            type="submit"
                                            onClick={addHandler}
                                        >
                                            Add
                                        </Button>
                                    </Col>

                                    <Col >
                                        <Button
                                            className="btn-fill pull-right"
                                            type="submit"
                                            variant="info"
                                        >
                                            Update
                                        </Button>
                                    </Col>

                                    <Col >
                                        <Button
                                            className="btn-fill pull-right"
                                            type="submit"
                                            variant="info"
                                        >
                                            Delete
                                        </Button>
                                    </Col>
                                </Row>


                                <div className="clearfix"></div>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>                               {/*Reservation details tables */}
                        <Card.Header>
                            <Card.Title as="h4">My Reservations</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table className="table-hover">
                                <thead>
                                    <tr>
                                        <th className="border-0">Client ID</th>
                                        <th className="border-0">Package ID</th>
                                        <th className="border-0">Room Id</th>
                                        <th className="border-0">Check In Date</th>
                                        <th className="border-0">Check Out Date</th>
                                        <th className="border-0">Group size</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dakota Rice</td>
                                        <td>$36,738</td>
                                        <td>2022.6.7</td>
                                        <td>2022.10.4</td>
                                        <td>2</td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>


    );
}

export default Maps;
