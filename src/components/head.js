import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Head( { title } ) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        // obtained from https://github.com/PlanetaMundo/command-centre/blob/main/gatsby-config.js
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
    )
}
