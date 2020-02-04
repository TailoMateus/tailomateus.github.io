import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />

      {postList.map(
        ({
          node: {
            frontmatter: { image, titleImage, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
            <PostItem
              slug={slug}
              image={image}
              titleImage={titleImage}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              search={false}
            />
          )
      )}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "en-us")
            image
            title
            titleImage
            description
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList