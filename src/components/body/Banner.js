import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div>
            <section className="hero-banner bg-light py-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src="./images/web-development-vector.png" className="img-fluid" alt="Web Development"></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3">Build Test & Release Chain</h1>
                            <p className="lead text-secondary my-5">BTRchain operates exclusively in web application development and cloud native solutions.we specialize in a range of technology to take a scratch project to a full product development.</p>
                            <a href="/contact" className="btn btn-outline-secondary btn-lg border">Hire us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
