import React, { useState } from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import ParticlesBackground from '../components/particles'
import * as aboutStyles from './about.module.scss'

export default function AboutPage() {
    let quotaEnglish = "my quote"
    let quotaSpanish = "texto"
    const [language, setLanguage] = useState(quotaEnglish)


    return (
        <>
        <ParticlesBackground />
        <Layout>
            <Head title="About"/>
            <div>
                <h1 className={aboutStyles.heading}>About this centre</h1>
                <button onClick={() => setLanguage(!language)} className={aboutStyles.languageButton}>
                    {`${language ? 'Spanish' : 'English'}`}
                </button>
            </div>
            <p className={aboutStyles.paragraph}>{`${language ? quotaEnglish : quotaSpanish}`}</p>
        </Layout>
        </>
    )
}
