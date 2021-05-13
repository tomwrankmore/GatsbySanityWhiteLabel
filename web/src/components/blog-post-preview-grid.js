import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import styled from 'styled-components'
import { device } from '../styles/MediaQueries'
import { typography } from '../styles/Typography'
import { colors } from '../styles/Variables'

const StyledBlogGrid = styled.div`
  margin: 2em 0 4em; 
`

const Headline = styled.h2`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin: 2rem 0;

  & a {
    color: inherit;
    text-decoration: none;
  }
`

const Grid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;

  @media ${device.mediaMinSmall} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mediaMinMedium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const BrowseMoreNav = styled.div`
 ${typography.small}
  margin-top: 1rem;
  text-align: right;

  & a {
    display: inline-block;
    padding: 0.5rem 0;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${colors.colorAccent};
      }
    }
  }
`

function BlogPostPreviewGrid (props) {
  return (
    <StyledBlogGrid>
      {props.title && (
        <Headline>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </Headline>
      )}
      <Grid>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </Grid>
      {props.browseMoreHref && (
        <BrowseMoreNav>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </BrowseMoreNav>
      )}
    </StyledBlogGrid>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
