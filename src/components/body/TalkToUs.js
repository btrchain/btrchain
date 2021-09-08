import React from 'react'
import './TalkToUs.css'

export default function TalkToUs() {
    return (
        <div>
            <section id="banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2>What is Lorem Ipsum and why do we use it?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-md-8">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="/">Talk to us</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="VisaInquiry" className="container tab-pane active">
                                    <div className="get-quotes">
                                        <form>
                                            <div className="form-row row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Your Name</label>
                                                    <input type="type" className="form-control" placeholder="Name" value="" required />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Your Email Id</label>
                                                    <input type="email" className="form-control" placeholder="Email Id" value="" required />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Mobile Number</label>
                                                    <input type="number" className="form-control" placeholder="Mobile Number" required />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Choose  Enquiry Type</label>
                                                    <select className="form-control">
                                                        <option>Please Select</option>
                                                        <option>Business</option>
                                                        <option>Development</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                            <div className="col pb-3">
                                                <label for="exampleFormControlTextarea1">Your Question</label>
                                                <textarea className="form-control p-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            </div>
                                            <button className="btn btn-warning float-right" type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
