import React, { useState } from 'react'
import Head from '../components/head'
import techImage from './tech.jpg'
import Modal from 'react-modal';
import ParticlesBackground from '../components/particles'

import Layout from '../components/layout'
import * as homeStyles from './home.module.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard';




export default function IndexPage() {
  
  const [copied, setCopied] = useState(false)
 
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
    <ParticlesBackground />
    <Layout>
      <Head title="Home"/>
          {/* <button onClick={() => setStatus(!status)}>
          {`Current status: ${status ? 'on' : 'off'}`}
            </button> */}
            <h1>Hello.</h1>
            <h2>This page is made to promote individual sovereingty</h2>
                onCopy={() => setCopied({copied: true})}>
                <span className={homeStyles.publicKey}> copying to clickboard </span>
              </CopyToClipboard>
              or showing the whole key in 
              <span className={homeStyles.publicKey} onClick={openModal}> modal window</span>
            </h2>
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              className={homeStyles.modalWindow}
              overlayClassName={homeStyles.overlay}
              contentLabel="Example Modal"
              <p className={homeStyles.keyText}>
                <br />
              </p>
              <button onClick={closeModal} className={homeStyles.closeModal}>close</button>
        </Modal>
            <img src={techImage} className={homeStyles.image} alt="TechImage"></img>
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

