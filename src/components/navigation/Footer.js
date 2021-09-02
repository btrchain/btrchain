import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <footer className="font-small pt-4 mt-0 page-footer">
                <Container className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">BTR Chain</h6>
                            <p className='font-weight-bolder'>
                                BTRChain is rated as one of the top web agencies in India by various industry magazines and review sites. 
                                We have a right blend of award-winning designers, expert web developers and Google certified digital marketers which make us a unique one-stop solution for hundreds of our clients, spread across 80+ countries.
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Services
                            </h6>
                            <p>
                                <a
                                    className="ext2 h6 text-left"
                                    href="/"
                                >
                                    Web Development
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/"
                                >
                                    UX Design
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/"
                                >
                                    Mobile Apps
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/"
                                >
                                    Digital Marketing
                                </a>
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Resources</h6>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/">
                                    Blog
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/">
                                    Case Studies
                                </a>
                            </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Capabilities</h6>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/">
                                    Front-end Engineering
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="/">
                                    Cloud and DevOps
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6"
                                    href="http://mail.btrchain.com/"
                                >
                                    Web Framework
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6" href="/" >
                                    Database
                                </a>
                            </p>
                            <p>
                                <a
                                    className="ext2 h6" href="/" >
                                    Machine Learning
                                </a>
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p >
                                &copy; {new Date().getFullYear()} Copyright:{" "}
                                <a
                                    className="ext2 h6 text-center" rel="noopener noreferrer" href="https://www.btrchain.com">
                                    btrchain.com
                                </a>
                            </p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a

                                            className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                            href="https://www.instagram.com/"

                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a

                                            className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                            href="https://twitter.com/"

                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                            href="/"
                                        >
                                            <i className="fab fa-google-plus" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="btn-floating btn-sm rgba-white-slight mx-1 ext2 h6"
                                            href="/"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}
