import React from 'react'

import Card from '../cards/card-component'
import './what-we-do.style.css'

const WhatWeDo = () => {
    return (
        <div className="card-container"  >
            <div className='container'>
                <h1 classNam='font-weight-bold text-white '>What we do?</h1>
                <div className="row">
                    <div className="col-md-4 ">
                        <Card title="Frontend Devlopment" />
                    </div>
                    <div className="col-md-4">
                        <Card title="Backend Devlopment" />
                    </div>
                    <div className="col-md-4">
                        <Card title="Mobile App Devlopment" />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;
