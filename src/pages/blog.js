import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from '../components/head'
import ParticlesBackground from '../components/particles'

import * as blogStyles from './blog.module.scss'


import Layout from '../components/layout'

export default function BlogPage() {
    const posts = useStaticQuery(graphql`
    query{
        allContentfulBlogPost (
          sort: {
            fields: publishDate,
            order: DESC
          }
        ){
          edges{
            node{
              title
              slug
              publishDate (formatString:"MMMM Do, YYYY")
            }
          }
        }
      }
    `)
    
    return (
      <>
      <ParticlesBackground />
        <Layout>
          <Head title="Blog" />
            <h1 className={blogStyles.headerPost}>Posts</h1>
            <ul className={blogStyles.posts}>
                {posts.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.singlePost}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishDate}</p>
                            </Link>
                        </li> 
                    )
                })}
            </ul>
        </Layout>
        </>
    )
}
