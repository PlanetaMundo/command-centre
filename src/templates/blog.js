import React from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from '../components/head'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import * as templateStyles from './template.module.scss'


//templates worls a bit different. we DO NOT use setStateQuery liek in the 
//previous pages,,l instead just creating a const outside the function and exporting it
//and then accecing in the component by props (see below)

//QUERY FOR THE CMS
export  const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishDate(fromNow: true)
    body {
      raw
      references {
        contentful_id
        title
        file {
          url
        }
      }
    }
  }
}
`


export default function Blog(props) {

const { contentfulBlogPost: { title, slug, publishedDate, body: { raw, references } } } = props.data

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id;
        const {
          file: { url },
          title,
        } = references.find(({ contentful_id: id }) => {
          return id === imageID;
        });

        return <img src={url} alt={title} className={templateStyles.image}/>;
      },
    },
  };

  const rawBlogPostObject = JSON.parse(raw);

    return (
      //FOR THE CMS
        <Layout>
          <Head title={props.data.contentfulBlogPost.title} />
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          <div className={templateStyles.text}>{documentToReactComponents(rawBlogPostObject, options)}</div>
        </Layout>
    )
}
