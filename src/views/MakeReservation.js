import Axios from "axios";
import React, { useState, useEffect } from "react";

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

    const [reservationID, setreservationID] = useState('');
    const [clientId, setClientId] = useState('');
    const [packageId, setpackageId] = useState('');
    const [roomId, setroomId] = useState('');
    const [CheckInDate, setCheckInDate] = useState('');
    const [checkOutDate, setcheckOutDate] = useState('');
    const [members, setmembers] = useState('');
    // const [roomStatus] = useState('false');
    const [data, getData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("http://localhost:8082/reservations")
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }


    function submitHandler(e) {
        e.preventDefault();

        const url = "http://localhost:8082/reservations"
        Axios.post(url, {
            cusId: clientId,
            packageId: packageId,
            roomId: roomId,
            checkIn: CheckInDate,
            checkOut: checkOutDate,
            members: members
        })
            .then(res => {
                fetchData()
                alert("Submitted success")
            })

        const urlroom = `http://localhost:8080/rooms/${roomId}`
        Axios.put(urlroom, {
            roomId: roomId,
            // roomStatus: roomStatus

        })
        console.log(roomId);



    }

    function updateHandler(e) {
        const url = "http://localhost:8082/reservations"
        Axios.put(url, {

            reservation_id: reservationID,
            cusId: clientId,
            packageId: packageId,
            roomId: roomId,
            checkIn: CheckInDate,
            checkOut: checkOutDate,
            members: members
        })
            .then(res => {

                alert("Update success")
                fetchData()
            })
    }

    function deleteHandler(reservationID) {


        const url = `http://localhost:8082/reservations/${reservationID}`
        Axios.delete(url, {
            reservation_id: reservationID

        })
            .then(res => {

                alert("Delete success")
                fetchData()
            })

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
                                            <label>Reservation ID (Optional)</label>
                                            <Form.Control
                                                type="text"
                                                value={reservationID}
                                                onChange={(e) => setreservationID(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                    </Col>
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
                                            onClick={() => deleteHandler(reservationID)}
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
                                        <th className="border-0">Reservation ID</th>
                                        <th className="border-0">Client ID</th>
                                        <th className="border-0">Package ID</th>
                                        <th className="border-0">Room Id</th>
                                        <th className="border-0">Check In Date</th>
                                        <th className="border-0">Check Out Date</th>
                                        <th className="border-0">Group size</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.reservation_id}</td>
                                            <td>{item.cusId}</td>
                                            <td>{item.packageId}</td>
                                            <td>{item.roomId}</td>
                                            <td>{item.checkIn}</td>
                                            <td>{item.checkOut}</td>
                                            <td>{item.members}</td>


                                        </tr>
                                    ))}
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
