import React from 'react'
import { Container } from 'react-bootstrap'


import rinBg from './ring-chain.png'
import conBg from './con-chain.png'
import './About.css'

export default function About() {
    return (
        <div>
            <div className="l-container" style={{
                backgroundColor: '#f5f4f4cc',
                backgroundImage: `url(${rinBg})`,

            }}>
                <Container >
                    <div className="i-container text-center">
                        <h2 className='py-4'>Who we are ?</h2>
                        <div>
                            <p>
                                CloudBees offers the world’s first connected, automated, end-to-end software delivery platform. We help developers focus on building and delivering great software, while providing management with powerful risk mitigation, compliance and governance capabilities.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="l-container" style={{
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
            </div>

            <div className="l-container" style={{
                backgroundColor: 'rgba(245, 244, 244, 0.8)',
                backgroundImage: `url(${conBg})`,
            }}>
                <Container >
                    <div className="i-container text-center">
                        <h2 className='py-4'>What we do ?</h2>
                        <div>
                            <p>
                                CloudBees offers the world’s first connected, automated, end-to-end software delivery platform. We help developers focus on building and delivering great software, while providing management with powerful risk mitigation, compliance and governance capabilities.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="l-container" style={{
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
            </div>
        </div>
    )
}
