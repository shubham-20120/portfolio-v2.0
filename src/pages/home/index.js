import React from 'react'
import { Helmet } from 'react-helmet'
import {Contacts, Education, Experience, Landing, Navbar, Projects, Skills } from '../../components'
import { headerData } from '../../data/headerData'

export default function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contacts />
        </div>
    )
}
