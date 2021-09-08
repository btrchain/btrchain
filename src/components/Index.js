import React from 'react'
import Banner from './body/Banner'
import WhatWeDo from './body/WhatWeDo'
import TechExpertise from './body/TechExpertise'
import TalkToUs from './body/TalkToUs'
import Introduction from './body/Introduction'

export default function Index() {
    return (
        <div>
            <Banner />
            <Introduction/>
            <WhatWeDo />
            <TechExpertise />
            <TalkToUs />
        </div>
    )
}
