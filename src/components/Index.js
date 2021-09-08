import React from 'react'
import Banner from './body/Banner'
import WhatWeDo from './body/WhatWeDo'
import TechExpertise from './body/TechExpertise'
import ContactUs from './contact/Contact'

export default function Index() {
    return (
        <div>
            <Banner />
            <WhatWeDo />
            <TechExpertise />
            <ContactUs />
        </div>
    )
}
