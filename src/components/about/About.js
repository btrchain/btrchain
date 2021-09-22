import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import rinBg from './ring-chain.png'
// import conBg from './con-chain.png'
import './About.css'

export default function About() {
    return (
        <div className='container-fluid'>
            <div className="i-container">
                <h2 className='text-center py-4'>About Us</h2>
                <p>BTRChain puts together a bunch of passionate minds to transform your visions into reality imparting an awesome digital experience for your users. From website design, development, scalable mobile apps to Devops platforms, the solution we engineer accelerate efficiency and fuel growth for our clients.</p>
            </div>
            <Row>
                <Col md="6">
                    <div className="l-container">
                        <Container >
                            <div className="i-container">
                                <h2 className='py-4'>Who we are </h2>
                                <div>
                                    <p>
                                        BTRchain is not an entity, it’s a family that represents togetherness. For us, the definition of success is to transcend innovative ideas of people to reality with the help of our tech expertise, this is what we, as a Team, want to be remembered for!.
                                        <br></br>
                                        <br></br>
                                        Our vision has led BTRChain to become a top IT company in India for delivering various industry-led mobility solutions. The goal is to empower clients and businesses by creating new possibilities leveraging the technologies of today and tomorrow with the utmost quality, satisfaction, and transparency.
                                    </p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Col>
                <Col md="6">
                    <div className="l-container">
                        <div className=" i-container">
                            <h2 className='py-4'>What we do </h2>
                            <div>
                                <p>
                                    Our enthusiasm has led us to become a top IT company in India for delivering various industry-led mobility solutions in web and mobile application development domains leveraging futuristic technologies like DevOps & Cloud computing.
                                    <br></br>
                                    <br></br>
                                    We feel empowered with our certified tech experts team who have always challenged themselves to help global clientele with a plethora of IT services and solutions. Engagement with our team guarantees our clients to save huge money on project development with faster delivery.
                                </p>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>



            {/* <div className="l-container" style={{
                "backgroun-color": '#fff',

            }}>
                <Container >
                    <div className="i-container text-center">
                        <h2 className='py-4'>Our values</h2>
                        <div>
                            <p>
                                CloudBees offers the world’s first connected, automated, end-to-end software delivery platform. We help developers focus on building and delivering great software, while providing management with powerful risk mitigation, compliance and governance capabilities.
                            </p>
                        </div>
                    </div>
                </Container>
            </div> */}



            {/* <div className="l-container" style={{
                "backgroun-color": '#fff',
            }}>
                <Container >
                    <div className="i-container text-center">
                        <h2 className='py-4'>working on technologies</h2>
                        <div>
                            <p>
                                CloudBees offers the world’s first connected, automated, end-to-end software delivery platform. We help developers focus on building and delivering great software, while providing management with powerful risk mitigation, compliance and governance capabilities.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="l-container m-5" style={{
                "backgroun-color": '#fff',
            }}>
                <Container >
                    <div className="text-center py-4 mx-auto">
                        <h2 className='py-4'>Clients</h2>
                        <div className='clientRow'>
                            <div className="mx-4">
                                <img src="https://images.ctfassets.net/vtn4rfaw6n2j/6eDDh6TwE4YX9dgPdjp6pk/80bcf4e688ab9728a6d751ae0f78a52a/About-Us-Badge-G2.png" alt="" />
                            </div >
                            <div className="mx-4">
                                <img src="https://images.ctfassets.net/vtn4rfaw6n2j/6eDDh6TwE4YX9dgPdjp6pk/80bcf4e688ab9728a6d751ae0f78a52a/About-Us-Badge-G2.png" alt="" />
                            </div>
                            <div className="mx-4">
                                <img src="https://images.ctfassets.net/vtn4rfaw6n2j/6eDDh6TwE4YX9dgPdjp6pk/80bcf4e688ab9728a6d751ae0f78a52a/About-Us-Badge-G2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div> */}
        </div>
    )
}
