import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import Nodelogo from './images/nodejs-1-logo-svg-vector.svg'
import Reactlogo from './images/react-1-logo-svg-vector.svg'
import Firebaselogo from './images/firebase-1-logo-svg-vector.svg'
import Awslogo from './images/Amazon_Web_Services_Logo.svg'
import './TechExpertise.css'

export default function TechExpertise() {
    return (
        <div className='Tech-bg'>
            <Container>
                <p className='h3 text-center pt-5'>Our Technology Expertise</p>
                <Row>
                    <Col>
                    <Image src={Reactlogo} className='Tech-img' rounded />
                    </Col>
                    <Col>
                    <Image src={Nodelogo} className='Tech-img' rounded />
                    </Col>
                    <Col>
                    <Image src={Firebaselogo} className='Tech-img' rounded />
                    </Col>
                    <Col>
                    <Image src={Awslogo} className='Tech-img' rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
