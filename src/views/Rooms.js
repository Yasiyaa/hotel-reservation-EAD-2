import React, { useState } from "react";


// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
    Table

} from "react-bootstrap";

function Rooms() {
    const [roomId, setRoomId] = useState('');
    const [roomType, setRoomType] = useState('Luxury');
    const [roomPrice, SetRoomPrice] = useState('');
    const [availableStatus, SetAvailableStatus] = useState('True');

    function addHandler() {


        console.log(roomId, roomType, roomPrice, availableStatus);

    }

    return (
        <>
            <Container fluid>
                <Row>      {/* add new room form */}
                    <Col >
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Manage Room</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>          {/* Form details */}
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Room ID</label>
                                                <Form.Control
                                                    placeholder="Room ID"
                                                    type="text"
                                                    value={roomId}
                                                    onChange={(e) => setRoomId(e.target.value)}

                                                ></Form.Control>
                                            </Form.Group>


                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>Room Type</label><br></br>
                                                <Form.Select size="lg" id="roomtype" value={roomType}
                                                    onChange={(e) => setRoomType(e.target.value)}>
                                                    <option value="luxury">Luxury</option>
                                                    <option value="semi luxury">Semi Luxury</option>

                                                </Form.Select>

                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>
                                                    price
                                                </label>
                                                <Form.Control
                                                    placeholder="Price"
                                                    type="text"
                                                    value={roomPrice}
                                                    onChange={(e) => SetRoomPrice(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Room Available Status</label><br></br>
                                                <Form.Select size="lg" id="availableStatus" value={availableStatus}
                                                    onChange={(e) => SetAvailableStatus(e.target.value)}>
                                                    <option value="True">True</option>
                                                    <option value="False">False </option>

                                                </Form.Select>

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <Button
                                                className="btn-fill pull-right"
                                                variant="info"
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
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h4">Room  reservation details</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Table className="table-hover">   {/* Room reservation details table */}
                                        <thead>
                                            <tr>
                                                <th className="border-0">Room ID</th>
                                                <th className="border-0">Room type</th>
                                                <th className="border-0">Price</th>
                                                <th className="border-0">Available Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>$36,738</td>
                                                <td>true</td>

                                            </tr>

                                        </tbody>
                                    </Table>
                                </Card.Body>

                            </Card>
                        </Card>
                    </Col>

                </Row>

                <Row>

                </Row>
            </Container>
        </>
    );
}

export default Rooms;
