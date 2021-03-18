const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
 
  createTypes(`
    type MarkdownRemarkFrontmatter {
      image: String
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

// You can delete this file if you're not using it
// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allMarkdownRemark(sort :{fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
            image
          }
          timeToRead
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges


    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    const postPerPage = 6;
    const numPages = Math.ceil(posts.length / postPerPage);

     Array.from({length: numPages}).forEach((_, index) =>{
       createPage({
         path: index == 0 ? `/` : `/page/${index + 1}`,
         component: path.resolve(`./src/templates/blog-list.js`),
         context: {
           limit: postPerPage,
           skip: index * postPerPage,
           numPages,
           currentPage: index + 1
         }
        
        })
     })
  })
}