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
import Devops from './images/Devops-toolchain.svg'
import './TechExpertise.css'

export default function TechExpertise() {
    return (
        <div className='Tech-bg py-5'>
            <Container>
                <p className='h2 text-center py-1'>Our Technology Expertise</p>
                <Row className='justify-content-center'>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Reactlogo} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Devops} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Nodelogo} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Firebaselogo} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Express} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Awslogo} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Docker} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Mongo} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={PHP} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Laravel} className='Tech-img' />
                    </Col>
                    <Col className='col-6 col-sm-4 col-lg-3 col-xl-2 pt-5 text-center'>
                        <Image src={Wordpress} className='Tech-img' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
