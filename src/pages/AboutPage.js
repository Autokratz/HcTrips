import {Col, Row, Container, Card, CardBody, CardHeader} from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About Us"/>
            <Row className="row-content">
                <Col sm="6">
                    <h3>Our Mission</h3>
                    <p>
                        We offer and present a huge catalog of option to our customers who are willing to travel across Syndey, visiting its natural parks and enjoy its nature. Everything as easy as booking with us.
                    </p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>November 15, 2023</dd>
                                <dt className='col-6'>No. of Campsites in 2024</dt>
                                <dd className='col-6'>10</dd>
                                <dt className='col-6'>No. of Reviews in 2023</dt>
                                <dd className='col-6'>10</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>8</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p>Since i started booking my trips with HC Trips i have a new adventure every summer.</p>
                                <footer className="blockquote-footer">
                                    Michael Fernandez{' '}
                                    <cite title='Source Title'>
                                       Sydney 2023
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
};

export default AboutPage;