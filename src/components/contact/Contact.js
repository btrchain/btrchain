import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Contact() {
    return (
        <div>
            <div className='container-fluid'>
                <Breadcrumb className='d-flex justify-content-center'>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container>

            </Container>
        </div>
    )
}
