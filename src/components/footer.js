import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from './footer.module.scss'

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
            <p>Created by {data.site.siteMetadata.author} and maintained by someone else, © 2021</p>
        </footer>
    )
}
