import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import Nodelogo from './images/nodejs-1-logo-svg-vector.svg'
import Reactlogo from './images/react-1-logo-svg-vector.svg'
import Firebaselogo from './images/firebase-1-logo-svg-vector.svg'
import Awslogo from './images/Amazon_Web_Services_Logo.svg'
import Docker from './images/docker.svg'
import PHP from './images/PHP-logo.svg'
import Mongo from './images/mongodb-icon.svg'
import Express from './images/expressjs-ar21.svg'
import Laravel from './images/laravel-2.svg'
import Wordpress from './images/wordpress-seeklogo.com.svg'
import './TechExpertise.css'

export default function TechExpertise() {
    return (
        <div className='Tech-bg py-5'>
            <Container>
                <p className='h2 text-center py-1'>Our Technology Expertise</p>
                <Row className='justify-content-center'>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Reactlogo} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Nodelogo} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Firebaselogo} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Express} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Awslogo} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Docker} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Mongo} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={PHP} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Laravel} className='Tech-img' rounded />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5'>
                        <Image src={Wordpress} className='Tech-img' rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
