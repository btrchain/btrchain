import React from 'react'
import './error404.css'

export default function error404() {
    return (
        <div>
            <div className="not-found">
                <h2><span>404</span><br></br>Page not found</h2>
                <h3>Oops, sorry we can’t find that page!!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                    Lorem Ipsum has been the industry’s standard dummy text.</p>
                <div className="go-on">
                    <a href="/">Visit Homepage</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </div>
    )
}
