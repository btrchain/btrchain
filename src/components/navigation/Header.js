import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light  py-4">
                <div className='container'>
                    <a className="navbar-brand" href="#"><b>BTR</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">OUR SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header-bg">
                <img src='/images/bg1.png' className='img-fluid' />
            </div>
        </header>
    )
}
