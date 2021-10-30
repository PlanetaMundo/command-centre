import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from './footer.module.scss'
import githubLogo from '../pages/icons8-github-30.png'

export default function Footer() {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    return (
        <footer className={footerStyles.footer}>
    {/*obtained from https://github.com/PlanetaMundo/command-centre/blob/main/gatsby-config.js*/}
            <p>Created by {data.site.siteMetadata.author}, © 2021 
            <a href="https://github.com/PlanetaMundo/command-centre" target="_blank">
            <img src={githubLogo} className={footerStyles.image} alt="logo"></img></a>
                </p>
        </footer>
    )
}

