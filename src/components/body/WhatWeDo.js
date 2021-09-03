import React from 'react'
import Card from '../cards/card-component'
import backendImg from './images/backend.svg'
import frontendImg from './images/frontend.svg'
import devOpsImg from './images/devops.svg'
import './WhatWeDo.css'
import { Container } from 'react-bootstrap'

export default function WhatWeDo() {
    return (
        <div>
            <div className="card-container"  >
                <Container>
                    <p className='h3 font-weight-bold text-white text-center pt-5'>What we do?</p>
                    <div className="row">
                        <div className="col-md-4 ">
                            <Card title="Frontend Devlopment" src={frontendImg} />
                        </div>
                        <div className="col-md-4">
                            <Card title="Backend Devlopment" src={backendImg} />
                        </div>
                        <div className="col-md-4">
                            <Card title="Mobile App Devlopment" src={devOpsImg} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
