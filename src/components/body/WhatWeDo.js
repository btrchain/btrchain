import React from 'react'
import backendImg from './images/backend.svg'
import frontendImg from './images/frontend.svg'
import devOpsImg from './images/devops.svg'
import mobile from './images/ddArtboard 1mobiloe app.svg'
import './WhatWeDo.css'
import { Container } from 'react-bootstrap'

export default function WhatWeDo() {
    return (
        <div>
            <div className="card-container py-5">
                <Container>
                    <p className='h2 font-weight-bold text-white text-center py-3'>What we do?</p>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="card what-we-do-card" style={{ "background-image": "url('images/redline.svg')" }}>
                                <img className="card-img-top" src={frontendImg} alt="what we do" />
                                <div className="card-body text-center">
                                    <p className="h3 py-2">Frontend Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card what-we-do-card" style={{ "background-image": "url('images/redline.svg')" }}>
                                <img className="card-img-top" src={backendImg} alt="what we do" />
                                <div className="card-body text-center">
                                    <p className="h3 py-2">Backend Development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card what-we-do-card" style={{ "background-image": "url('images/redline.svg')" }}>
                                <img className="card-img-top" src={mobile} alt="what we do" />
                                <div className="card-body text-center">
                                    <p className="h3 py-2">Mobile App Devlopment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card what-we-do-card" style={{ "background-image": "url('images/redline.svg')" }}>
                                <img className="card-img-top" src={devOpsImg} alt="what we do" />
                                <div className="card-body text-center">
                                    <p className="h3 py-2">DevOps Engineering</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
