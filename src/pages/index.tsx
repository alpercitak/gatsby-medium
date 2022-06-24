import * as React from "react"
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

type IProps = {
  data: any
}

const postStyle = {
  color: "#232129",
  fontSize: 14,
  margin: 8,
  padding: 8,
  lineHeight: 1.25,
  border: "1px solid #EEE"
}

const tagStyle = {
  marginRight: 4,
  color: "rgba(245, 139, 0, 0.75)"
}

const footerStyle = {
  position: "fixed", 
  left: 0,
  right: 0,
  bottom: 0, 
  width: "100%", 
  border: "1px solid #DDD", 
  height: 48,
  paddingLeft: 16,
  paddingRight: 16,
  display: "flex",
  alignItems: "center"
}

const IndexPage = (props: IProps) => {
  return <>
    {props.data.allMediumPost.edges.map((x: any) => (
      <div style={postStyle}>
        <div>
          <a href={`https://medium.com/@${x.node.author.username}/${x.node.slug}-${x.node.medium_id}`} target='_blank'>{x.node.title}</a>
        </div>
        <div>{x.node.virtuals.subtitle}</div>
        <div>
            {x.node.virtuals.tags.map((tag: any) => {
              return (<span style={tagStyle}>#{tag.slug}</span>)
            })}
        </div>
      </div>
    ))}
    <div style={footerStyle}>
      <a href="https://github.com/alpercitak/gatsby-medium" target={'_blank'}>
        <StaticImage src="../images/github-mark-32px.png" alt="Github"></StaticImage>
      </a>
    </div>
  </>
}

export const query = graphql`
  query mediumQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          medium_id
          slug
          virtuals {
            subtitle
            tags {
              slug
            }
          }
          author {
            name
            username
          }
        }
      }
    }
  }
`

export default IndexPage
