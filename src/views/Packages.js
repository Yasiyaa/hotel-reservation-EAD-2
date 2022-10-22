import React, { useState } from "react";

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

    const [packageId, SetPackageId] = useState('');
    const [packageType, SetPackageType] = useState('Dayout');
    const [PackagePrice, SetPackagePrice] = useState('');
    const [Members, SetMembers] = useState('');
    const [Activities, SetActivities] = useState('');
    const [AboutPackage, SetAboutPackage] = useState('');

    function addHandler(e) {
        e.preventDefault();

        console.log(packageId, packageType, PackagePrice, Members, Activities, AboutPackage);



    }
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
                                                    value={packageId}
                                                    onChange={(e) => SetPackageId(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>Package Type</label><br></br>
                                                <Form.Select size="lg" value={packageType}
                                                    onChange={(e) => SetPackageType(e.target.value)}
                                                >
                                                    <option value="Dayout">Dayout</option>
                                                    <option value="Event">Event </option>
                                                    <option value="Honeymoon">Honeymoon </option>


                                                </Form.Select>

                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Price</label>
                                                <Form.Control
                                                    placeholder="Price"
                                                    type="text"
                                                    value={PackagePrice}
                                                    onChange={(e) => SetPackagePrice(e.target.value)}
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
                                                    value={Members}
                                                    onChange={(e) => SetMembers(e.target.value)}
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
                                                    value={Activities}
                                                    onChange={(e) => SetActivities(e.target.value)}
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
                                                    value={AboutPackage}
                                                    onChange={(e) => SetAboutPackage(e.target.value)}
                                                ></Form.Control>
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
                            <Card>                               {/* Package reservation details table */}
                                <Card.Header>
                                    <Card.Title as="h4">Package  reservation details</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Table className="table-hover">
                                        <thead>
                                            <tr>
                                                <th className="border-0">Package ID</th>
                                                <th className="border-0">Package Type</th>
                                                <th className="border-0">Price</th>
                                                <th className="border-0">Minimum group size</th>
                                                <th className="border-0">Activities</th>
                                                <th className="border-0">About the package</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>$36,738</td>
                                                <td>Niger</td>
                                                <td>Hiking,bird watching,Swiming</td>
                                                <td>Package Includes: Lunch buffet, Evening snack & tea, complimentary room, pool access, pet-friendly environment</td>
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
