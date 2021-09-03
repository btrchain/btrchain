import React from 'react'
import Card from '../cards/card-component'
import backendImg from './backend.svg'
import frontendImg from './frontend.svg'
import devOpsImg from './devops.svg'
import './WhatWeDo.css'

export default function WhatWeDo() {
    return (
        <div>
            <div className="card-container"  >
                <div className='container'>
                    <h1 className='font-weight-bold text-white '>What we do?</h1>
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
                </div>
            </div>
        </div>
    )
}
