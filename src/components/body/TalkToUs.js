import React from 'react'
// import { Col, Container, Form, Row } from 'react-bootstrap'
// import { IoMdMegaphone } from "react-icons/io";
import './TalkToUs.css'

export default function TalkToUs() {
    return (
        <div>
            <div class="wrap-contact100" >

                <form class="contact100-form validate-form">
                    <span class="contact100-form-title">
                        Contact Us
                    </span>

                    <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                        <span class="label-input100">Your Name</span>
                        <input class="input100" type="text" name="name" placeholder="Enter your name" />
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <span class="label-input100">Email</span>
                        <input class="input100" type="text" name="email" placeholder="Enter your email addess" />
                        <span class="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Message is required">
                        <span class="label-input100">Message</span>
                        <textarea class="input100" name="message" placeholder="Your message here..."></textarea>
                        <span class="focus-input100"></span>
                    </div>

                    <div class="container-contact100-form-btn">
                        <button class="contact100-form-btn">
                            <span>
                                Submit
                                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>

                <span class="contact100-more">
                    For any question contact our 24/7 call center: <span class="contact100-more-highlight">+001 345 6889</span>
                </span>
            </div>
        </div>
    )
}
{/* <div className='talk-bg'>
            <Container className='pt-5 p-5'>
                <p className='h5 talkColor'><IoMdMegaphone/> Talk to us</p>
                <p className='h3 pt-2 pb-2 talkColor'>To schedule a discussion or demo with one of our consultants, please fill in your contact details</p>
                <Form>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" className='text-black' placeholder="Your Name" />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" className='text-black' placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={4} className='text-black' placeholder="Type your message here..." />
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </div> */}