import {Col, Row, Container, Card, CardBody, CardHeader} from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const TaskPage = () => {
    return (
        <Container>
            <SubHeader current="Task 4-8"/>
            <Row className="row-content">
                <Col sm="6">
                    <h3>Our Mission</h3>
                    <p>
                        We present a fantastic option to help you book your next trip in Sydney!
                    </p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>We care about your Feedback!</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiMMhsJve4bSSpBHnCCsIicXatT9izxN1wSYISEUpnMT-1zA/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0"></iframe></dt>
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
                                    Michael Fernandez,{' '}
                                    <cite title='Source Title'>
                                        Sydney 2023
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div><img src="src/app/assets/img/feedbacksheet.png"></img></div>
        </Container>
    )
};

export default TaskPage;