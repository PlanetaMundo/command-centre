
import React, { useState } from 'react'
import Head from '../components/head'
import techImage from './tech.jpg'
import Modal from 'react-modal';
import ParticlesBackground from '../components/particles'

import Layout from '../components/layout'
import * as homeStyles from './home.module.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function IndexPage() {
  
  return (
    <>
		<ParticlesBackground />
		<Layout>
			<Head title="Home"/>
			{/* <button onClick={() => setStatus(!status)}>
			{Current status: ${status ? 'on' : 'off'}}
            </button> */}
			<h1>Hello.</h1>
		<h2>This site is done by a good mate whose mission is to educate the population.</h2>
	  <h2>Check my blog posts! Thanks. below is an irrelevant image</h2>
         
/* <img src={techImage} className={homeStyles.image} alt="TechImage"></img> */
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

