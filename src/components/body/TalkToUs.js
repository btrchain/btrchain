import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { IoMdMegaphone } from "react-icons/io";
import './TalkToUs.css'

export default function TalkToUs() {
    return (
        <div className='talk-bg'>
            <Container className='pt-5 p-5'>
                <p className='h5 talkColor'><IoMdMegaphone/> Talk to us</p>
                <p className='h3 pt-2 pb-2'>To schedule a discussion or demo with one of our consultants, please fill in your contact details</p>
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
        </div>
    )
}
