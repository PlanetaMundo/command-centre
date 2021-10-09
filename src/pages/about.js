import React, { useState } from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import ParticlesBackground from '../components/particles'
import * as aboutStyles from './about.module.scss'
import * as homeStyles from './home.module.scss'

export default function AboutPage() {
    let quotaEnglish = "The emulation of the models, systems, and elements of nature for the purpose of solving complex human problems."
    let quotaSpanish = "La ciencia que estudia a la naturaleza, como fuente de inspiración de tecnologías innovadoras, para resolver aquellos problemas humanos que la naturaleza ha resuelto."
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
            
            <h2 className={homeStyles.topicsCovered}>Topics covered</h2>
            <div className={homeStyles.flexBox}>
            <h2 className={homeStyles.flexElement}>Linux</h2>
            <h2 className={homeStyles.flexElement}>Cryptocurrency</h2>
            <h2 className={homeStyles.flexElement}>Python</h2>
            <h2 className={homeStyles.flexElement}>3D printing</h2>
            <h2 className={homeStyles.flexElement}>Raspberry Pi</h2>
            </div>
            
        </Layout>
        </>
    )
}
