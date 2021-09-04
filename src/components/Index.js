import React from 'react'
import Banner from './body/Banner'
import TalkToUs from './body/TalkToUs'
import WhatWeDo from './body/WhatWeDo'
import TechExpertise from './body/TechExpertise'

export default function Index() {
    return (
        <div>
            <Banner />
            <TechExpertise />
            <WhatWeDo />
            <TalkToUs />
        </div>
    )
}
