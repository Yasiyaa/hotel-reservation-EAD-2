import React from "react";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Table,
    Container,
    Row,
    Col,
    Dropdown
} from "react-bootstrap";

function Packages() {
    return (
        <>
            <Container fluid>
                <Row>      {/* add new room form */}
                    <Col >
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Manage Packages</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>          {/* Form details */}
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Package ID</label>
                                                <Form.Control
                                                    placeholder="Package ID"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label></label>
                                                <div >
                                                    <Dropdown >
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                            Package Type
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item >Honeymoon</Dropdown.Item>
                                                            <Dropdown.Item >Dayout</Dropdown.Item>
                                                            <Dropdown.Item >BirthDay Event</Dropdown.Item>

                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Price</label>
                                                <Form.Control
                                                    placeholder="Price"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Minimum Group members count</label>
                                                <Form.Control
                                                    defaultValue="2"
                                                    placeholder="count"
                                                    min="2"
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Activities</label>
                                                <Form.Control
                                                    defaultValue=""
                                                    placeholder="Activities"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>About the Package</label>
                                                <Form.Control
                                                    cols="80"
                                                    defaultValue="Package Includes: Lunch buffet, Evening snack & tea, complimentary room, pool access, pet-friendly environment"
                                                    placeholder="Here can be your description"
                                                    rows="4"
                                                    as="textarea"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <Button
                                                className="btn-fill pull-right"
                                                type="submit"
                                                variant="info"
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
                            <Card>                               {/* Package reservation details table */}
                                <Card.Header>
                                    <Card.Title as="h4">Package  reservation details</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Table className="table-hover">
                                        <thead>
                                            <tr>
                                                <th className="border-0">ID</th>
                                                <th className="border-0">Name</th>
                                                <th className="border-0">Salary</th>
                                                <th className="border-0">Country</th>
                                                <th className="border-0">City</th>
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
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>$23,789</td>
                                                <td>Curaçao</td>
                                                <td>Sinaai-Waas</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>$56,142</td>
                                                <td>Netherlands</td>
                                                <td>Baileux</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>$38,735</td>
                                                <td>Korea, South</td>
                                                <td>Overland Park</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Doris Greene</td>
                                                <td>$63,542</td>
                                                <td>Malawi</td>
                                                <td>Feldkirchen in Kärnten</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Mason Porter</td>
                                                <td>$78,615</td>
                                                <td>Chile</td>
                                                <td>Gloucester</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>

                            </Card>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default Packages;
