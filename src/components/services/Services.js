import React from 'react'
import { Col, Row, Image, Container, Card } from "react-bootstrap";

export default function Services() {
    const Services = [
        {
            id: 1,
            name: 'MEAN Stack Development',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/17_mean_stack_developer.svg'
        },
        {
            id: 2,
            name: 'React Native Development',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/21_react_native_developer.svg'
        },
        {
            id: 3,
            name: 'Software/Web Development',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/23_software_web_developer.svg'
        },
        {
            id: 4,
            name: 'Full Stack',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/30_full_stake.svg'
        },
        {
            id: 5,
            name: 'DevOps',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/32_devops.svg'
        },
        {
            id: 6,
            name: 'AWS',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/41_amazon_web_services.svg'
        },
        {
            id:7,
            name:'Cloud Deployment',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/42_cloud_deployment.svg'
        },
        {
            id:8,
            name:'eCommerce Development',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/47_ecommerce.svg'
        }
        ,
        {
            id:9,
            name:'Support & Maintenance',
            src:'https://www.spec-india.com/wp-content/uploads/2020/05/50_24-7_support_maintenance.svg'
        }
    ];
    return (
        <div>
            <Container>
                <Row className='pb-5 justify-content-center'>
                    <p className="h2 text-center py-5">Services</p>
                    {Services.map(service => (
                    <Col key={service.id} className="col-6 col-sm-4 col-lg-3 col-xl-3 pt-2">
                        <Card>
                            <Image src={service.src} className='w-50 m-auto' rounded fluid />
                            <p className='text-center h5'>{service.name}</p>
                        </Card>
                    </Col>
                      ))}
                </Row>
            </Container>
        </div>
    )
}
