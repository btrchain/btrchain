import React from 'react'

import Card from '../cards/card-component'
import './what-we-do.style.css'

const WhatWeDo = () => {
    return (
        <div className="card-container" >
            <div className='container'>
                <h1 classNam='font-weight-bold text-white mb-3'>What we do?</h1>
                <div className="row">
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;
