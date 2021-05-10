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
            <h2>Also, here I am providing an encrypted public key for communication. You can get it by
              <CopyToClipboard text="-----BEGIN PGP PUBLIC KEY BLOCK-----

                  mQGNBGBDr+IBDADZ8fdLMEFguDII3fhMePct3tDFUyWDT+QDoh5fsAgNVx2W4RUK
                  hvMXwTUkKyotVUOS6cjJ6vfxgUFrzF4nrKJD/WCGFKRmc9vm0WBwfGuyWKhl68ry
                  WUADn2Nat5AKeUq7EICI/SG18lcetErRYlFtLHWaBWBrLdvUxq2qKgXfnumJ2EhB
                  3CcMnBwxUJ+XPHl/UIDp+ySivtcQ5xj/Q/YXgBqVIaGJA7YbDXmo7BkT93wo6362
                  1zm716lGt54PGdkQAvFPdM7EluEK36/lgqqhQQnzKXPK823vBe7QkM+NFzZbQ2Fu
                  K+em13W6miMei9B788g+DgR2jAHemmk1aKpMe+ngUpSp4PWxBL+FAo+PWbCT37y6
                  stge45ttUrW3hP9QADl3cEEhCXGps5XfqVYtph/x29Nt78YVQKfmczcrDwVWNOIz
                  vB+EUNcpVB+ZEcruzOx6o/fq0QtwQow9cu1fP0/rD/msFXGIaYjqBsfjTxytcRR7
                  +GkBTjHAnsaEzlUAEQEAAbQqY2hhY290YXNwcm9kIDxwZXJ2aXRpbmFybXlAcHJv
                  dG9ubWFpbC5jb20+iQHOBBMBCAA4FiEEtwSbHZ+Ons9dNHAXFtNDPDvtoWcFAmBD
                  r+ICGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQFtNDPDvtoWdo/gwAne8n
                  ilR/NldpA3auu84y+bNNTMjM2XBavVE2litD6jhFI+hADXEjVCu9vKpKnZ8EGwNx
                  +vAZfWdPdi0/47cHbirTQ7qzoVHauXlYq5m2tr9itoSvzY/gqtQdlzvLKm0sxcwk
                  +hGBfIr194rGlYGCw4uvHZWQRVM8Wj2EG7ZWuhQMYv8V0SNxcN+TJyvwtTxw5kpG
                  E+cfOCP7BJc7PlKaNWKl7p6zJryHSt2qDkBrsNyL1KKe/n6QjjFQwnq8u9rBLA6E
                  FgJ6BXl1mJ/huNB8RNIn+j6hh8vGh4kAdI2K0cUnZ/7J7TQI9EzJn7IMiM0HxJnM
                  LGQ3WUkVmTat8blkB2ZLPsIMJ1xe/3vfUMdFowgoUdVwKJS8CebIMz5eqMDsyIW2
                  MR+pfsgtXTfOcxnQIAVmmftf/VqE43I/tKwU79ZkjL0CHdWpRG4SSt/KODe9af1h
                  aFEDo58njj36VU8ZBXP5Mb5FrYLEkqiX8oSad1Fg/8edVslQvyk+2XRxwxjfuQGN
                  BGBDr+IBDACqWbd6/GPyH6/29P+WkEl+B2wHwd59/Evr8q2CG/62hANekXwH4aFX
                  kvOj3p7R6pq+ZSLOwKQdX37JW8Q0Qv9Ayfvrg7e6CbJp11FIAuSmFGFlqaybUJS6
                  u3Jah98y4CNTt/0xn8pzRVy2aQbUZCzUiKG07nIjeARisSE44Z7U9WnwAhZrk1tl
                  8rnjJhF/r5elKNlNgwPE9Y1d8rUeVza2x8ZcYR3pZ0kV6N9Ucmd0B4Ausonf+waR
                  n8ZFnJmW5Ljf6basC3KWf2hRuTuzywXgjKfpf/ppF4tkUPIDVtNhjirT5eEfDTnU
                  jXSTeO7+NQtTLeWAWTeUcP/oHsn8gWIx5bLNWAMHKCYqwzcFTtKNFr0iO57ZOrb4
                  DfxwkJewCOysm8DmQFsW9tSSPZk9kEdbnUKNsWw30O3lj2oJtkD/tAU49pAWmdgQ
                  0sAvfmyjdcW53IpUTPUt1br1vyLFgIbwpygBX3EyWx/vPtYdv0+C+xO7PA0l44t1
                  nDLhkT2htKUAEQEAAYkBtgQYAQgAIBYhBLcEmx2fjp7PXTRwFxbTQzw77aFnBQJg
                  Q6/iAhsMAAoJEBbTQzw77aFndyEL/ig+eXGKUl2nSQa8msY3xiGOsxabtqGyPEYs
                  9w1VmOINPH5WzeOerRdlCX+ERJNZlzuvrqV9eMy2C9bNv3wTlynwhXGVNclCKAt4
                  2kGx6iR5QMU9Vm3oLu9oJaZEpI3mgdYgB+3vCLr4K81JFW9sB9pWLJ6AbL9cn0BD
                  PG+Ft/D0d3vaxW0puYXDnbZROTLbNjn+4jNjThkGJ8k5mxa2V+AFHgbXpRhfnAP2
                  e04dgWCgIcO8L9RBMvKha0d1O/vMXyHu/5XQ3Hsg9ac0IWqgHrbsIaLAyRhd/7+g
                  x9Pme+Eid1gCVlXedVcMOXg1Agg0piXNtwy/qjgvs8mf+3QJanXN+x9pEtI8tj+S
                  9EqujD/AhLwnebBR93/XDgPxSX5WR9PannzXw0QDiypphBWzh3FdQ70MBOW2mQWb
                  WBYi/4xV2k5vK+x9t87gSnmrOoGF/e0rgOBU5a8wAaiMfyy3VXJTOOS42R/GgJrL
                  wkKa9TlpWC6oY+C4wurlQqtxgGBbUA==
                  =M+il
                  -----END PGP PUBLIC KEY BLOCK-----"
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
            >
              <p className={homeStyles.keyText}>
                -----BEGIN PGP PUBLIC KEY BLOCK-----
                mQGNBGBDr+IBDADZ8fdLMEFguDII3fhMePct3tDFUyWDT+QDoh5fsAgNVx2W4RUK
                hvMXwTUkKyotVUOS6cjJ6vfxgUFrzF4nrKJD/WCGFKRmc9vm0WBwfGuyWKhl68ry
                WUADn2Nat5AKeUq7EICI/SG18lcetErRYlFtLHWaBWBrLdvUxq2qKgXfnumJ2EhB
                3CcMnBwxUJ+XPHl/UIDp+ySivtcQ5xj/Q/YXgBqVIaGJA7YbDXmo7BkT93wo6362
                1zm716lGt54PGdkQAvFPdM7EluEK36/lgqqhQQnzKXPK823vBe7QkM+NFzZbQ2Fu
                K+em13W6miMei9B788g+DgR2jAHemmk1aKpMe+ngUpSp4PWxBL+FAo+PWbCT37y6
                stge45ttUrW3hP9QADl3cEEhCXGps5XfqVYtph/x29Nt78YVQKfmczcrDwVWNOIz
                vB+EUNcpVB+ZEcruzOx6o/fq0QtwQow9cu1fP0/rD/msFXGIaYjqBsfjTxytcRR7
                +GkBTjHAnsaEzlUAEQEAAbQqY2hhY290YXNwcm9kIDxwZXJ2aXRpbmFybXlAcHJv
                dG9ubWFpbC5jb20+iQHOBBMBCAA4FiEEtwSbHZ+Ons9dNHAXFtNDPDvtoWcFAmBD
                r+ICGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQFtNDPDvtoWdo/gwAne8n
                ilR/NldpA3auu84y+bNNTMjM2XBavVE2litD6jhFI+hADXEjVCu9vKpKnZ8EGwNx
                +vAZfWdPdi0/47cHbirTQ7qzoVHauXlYq5m2tr9itoSvzY/gqtQdlzvLKm0sxcwk
                +hGBfIr194rGlYGCw4uvHZWQRVM8Wj2EG7ZWuhQMYv8V0SNxcN+TJyvwtTxw5kpG
                E+cfOCP7BJc7PlKaNWKl7p6zJryHSt2qDkBrsNyL1KKe/n6QjjFQwnq8u9rBLA6E
                FgJ6BXl1mJ/huNB8RNIn+j6hh8vGh4kAdI2K0cUnZ/7J7TQI9EzJn7IMiM0HxJnM
                LGQ3WUkVmTat8blkB2ZLPsIMJ1xe/3vfUMdFowgoUdVwKJS8CebIMz5eqMDsyIW2
                MR+pfsgtXTfOcxnQIAVmmftf/VqE43I/tKwU79ZkjL0CHdWpRG4SSt/KODe9af1h
                aFEDo58njj36VU8ZBXP5Mb5FrYLEkqiX8oSad1Fg/8edVslQvyk+2XRxwxjfuQGN
                BGBDr+IBDACqWbd6/GPyH6/29P+WkEl+B2wHwd59/Evr8q2CG/62hANekXwH4aFX
                kvOj3p7R6pq+ZSLOwKQdX37JW8Q0Qv9Ayfvrg7e6CbJp11FIAuSmFGFlqaybUJS6
                u3Jah98y4CNTt/0xn8pzRVy2aQbUZCzUiKG07nIjeARisSE44Z7U9WnwAhZrk1tl
                8rnjJhF/r5elKNlNgwPE9Y1d8rUeVza2x8ZcYR3pZ0kV6N9Ucmd0B4Ausonf+waR
                n8ZFnJmW5Ljf6basC3KWf2hRuTuzywXgjKfpf/ppF4tkUPIDVtNhjirT5eEfDTnU
                jXSTeO7+NQtTLeWAWTeUcP/oHsn8gWIx5bLNWAMHKCYqwzcFTtKNFr0iO57ZOrb4
                DfxwkJewCOysm8DmQFsW9tSSPZk9kEdbnUKNsWw30O3lj2oJtkD/tAU49pAWmdgQ
                0sAvfmyjdcW53IpUTPUt1br1vyLFgIbwpygBX3EyWx/vPtYdv0+C+xO7PA0l44t1
                nDLhkT2htKUAEQEAAYkBtgQYAQgAIBYhBLcEmx2fjp7PXTRwFxbTQzw77aFnBQJg
                Q6/iAhsMAAoJEBbTQzw77aFndyEL/ig+eXGKUl2nSQa8msY3xiGOsxabtqGyPEYs
                9w1VmOINPH5WzeOerRdlCX+ERJNZlzuvrqV9eMy2C9bNv3wTlynwhXGVNclCKAt4
                2kGx6iR5QMU9Vm3oLu9oJaZEpI3mgdYgB+3vCLr4K81JFW9sB9pWLJ6AbL9cn0BD
                PG+Ft/D0d3vaxW0puYXDnbZROTLbNjn+4jNjThkGJ8k5mxa2V+AFHgbXpRhfnAP2
                e04dgWCgIcO8L9RBMvKha0d1O/vMXyHu/5XQ3Hsg9ac0IWqgHrbsIaLAyRhd/7+g
                x9Pme+Eid1gCVlXedVcMOXg1Agg0piXNtwy/qjgvs8mf+3QJanXN+x9pEtI8tj+S
                9EqujD/AhLwnebBR93/XDgPxSX5WR9PannzXw0QDiypphBWzh3FdQ70MBOW2mQWb
                WBYi/4xV2k5vK+x9t87gSnmrOoGF/e0rgOBU5a8wAaiMfyy3VXJTOOS42R/GgJrL
                wkKa9TlpWC6oY+C4wurlQqtxgGBbUA==
                =M+il
                <br />
                -----END PGP PUBLIC KEY BLOCK-----
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

