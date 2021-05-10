const path = require('path')

//CMS VERSION

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    //get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //get markdown data
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    //create new pages
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                //if if has slug, then it can render all rest information 
                //like title, date and content
                slug: edge.node.slug

            }
        })
    })
}