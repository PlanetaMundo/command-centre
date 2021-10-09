import React, { useState } from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import ParticlesBackground from '../components/particles'
import * as aboutStyles from './about.module.scss'

export default function AboutPage() {
    let quotaEnglish = "The emulation of the models, systems, and elements of nature for the purpose of solving complex human problems."
    let quotaSpanish = "La ciencia que estudia a la naturaleza, como fuente de inspiración de tecnologías innovadoras, para resolver aquellos problemas humanos que la naturaleza ha resuelto"
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
