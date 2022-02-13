import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillInstagram, AiFillTwitterSquare, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <footer className="font-small pt-4 mt-0 page-footer">
                <Container className="text-left text-md-left">
                    <Row className="text-left text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">BTR Chain</h6>
                            <p className="ext2 h6 " >
                                BTRchain works with the latest technologies and providing the best solution for clients in the field of frontend backend mobile devleopment and devops.
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Services
                            </h6>
                            <p className="ext2 h6" > Web Development </p>
                            <p className="ext2 h6"> Mobile Apps</p>
                            <p className="ext2 h6" >Payment Integration</p>
                            <p className="ext2 h6" >Hosting Solution</p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Resources</h6>
                            <p className="ext2 h6"> Blog </p>
                            <p className="ext2 h6">Case Studies </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Capabilities</h6>
                            <p className="ext2 h6">Front-end Engineering </p>
                            <p className="ext2 h6">Cloud and DevOps</p>
                            <p className="ext2 h6"> Web Framework </p>
                            <p className="ext2 h6"> Database</p>
                            <p className="ext2 h6">Machine Learning</p>
                        </Col>
                    </Row>
                    <hr />
                    <p className='text-center'>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a
                            className="ext2 h6 text-center" rel="noopener noreferrer" href="https://www.btrchain.com">
                            btrchain.com
                        </a>
                    </p>
                    <ul className="list-unstyled list-inline pb-5 text-center">
                        <li className="list-inline-item ">
                            <a

                                className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                href="https://www.instagram.com/"

                            >
                                <AiFillInstagram className='footer-icons' />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a

                                className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                href="https://twitter.com/"

                            >
                                <AiFillTwitterSquare className='footer-icons' />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                href="/"
                            >
                                <AiFillGoogleCircle className='footer-icons' />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                href="/"
                            >
                                <AiFillLinkedin className='footer-icons' />
                            </a>
                        </li>
                    </ul>
                </Container>
            </footer>
        </div>
    )
}
