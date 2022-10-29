import React, { useState, useEffect } from "react";
import Axios from "axios";

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
    const [availableStatus, SetAvailableStatus] = useState('true');
    const [data, getData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("http://localhost:8080/rooms")
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    function submitHandler(e) {

        const url = "http://localhost:8080/rooms"
        Axios.post(url, {
            roomID: roomId,
            roomType: roomType,
            price: roomPrice,
            status: availableStatus
        })
            .then(res => {

                console.log("DONE")
            })


    }

    function updateHandler(e) {
        const url = "http://localhost:8080/rooms"
        Axios.put(url, {
            roomID: roomId,
            roomType: roomType,
            price: roomPrice,
            status: availableStatus
        })
            .then(res => {

                console.log("DONE")
                fetchData()
            })
    }

    function deleteHandler(e) {
        const url = `http://localhost:8080/rooms/${roomId}`
        Axios.delete(url, {
            roomID: roomId,

        })
            .then(res => {

                console.log("DONE")
                fetchData()
            })

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
                                <Form onSubmit={submitHandler}>          {/* Form details */}
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
                                                    <option value="true">True</option>
                                                    <option value="false">False </option>

                                                </Form.Select>

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <Button
                                                className="btn-fill pull-right"
                                                variant="info"
                                                type="submit"
                                            >
                                                Add
                                            </Button>
                                        </Col>

                                        <Col >
                                            <Button
                                                className="btn-fill pull-right"
                                                variant="info"
                                                onClick={updateHandler}
                                            >
                                                Update
                                            </Button>
                                        </Col>

                                        <Col >
                                            <Button
                                                className="btn-fill pull-right"
                                                variant="info"
                                                onClick={deleteHandler}
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
                                            {data.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.roomID}</td>
                                                    <td>{item.roomType}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.status}</td>
                                                </tr>
                                            ))}
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
