import React from 'react'
import './card.style.css'

const Card = ({ title, src }) => {
    return (
        <div className="card what-we-do-card" style={{ "background-image": "url('images/redline.svg')" }}>
            <img className="card-img-top" src={src} alt="what we do" />
            <div className="card-body text-center">
                <h3 className="card-title py-5">{title}</h3>

            </div>
        </div>
    )
}
export default Card;
