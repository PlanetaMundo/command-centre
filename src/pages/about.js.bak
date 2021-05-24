import React, { useState } from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import ParticlesBackground from '../components/particles'
import * as aboutStyles from './about.module.scss'

export default function AboutPage() {
    let quotaEnglish = "NEW ONLINE IDENTITY: earn in cash, convert some to crypto. Use public wifi to create a new email from protonmail or tutanota, eludemail in case no clearnet is possible. Do not tie your identity, but instead a pseudonym. Choose a good password. Get a new phone and learn to flash CalyxOS or GrapheneOS. Get a new Laptop (second hand also) and flash any reliable Linux to it, popOS is quite good"
    let quotaSpanish = "NUEVA IDENTIDAD ONLINE: gana dinero suelto, convierte algo a crypto. Ocupa una red de wifi publica para generar un email en protonmail o tutanota, ocupa eludemail si clearnet no es una opcion. No lo conectes a tu identidad, sino ocupa un synonimo. Elige una buena contrasena. Consigue un celular nuevo (de segunda mano) y aprende a installar CalyxOS o GrapheneOS en el, tambien una nueva laptop e installa popOS o cualquier systema linux que funcione"
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
