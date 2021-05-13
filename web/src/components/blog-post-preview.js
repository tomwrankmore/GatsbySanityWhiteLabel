import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import styled from 'styled-components'
import { Heading3 } from '../styles/Typography'

const BlogPostLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;

  :hover {
    h3 {
      text-decoration: underline;
    }
  }
`

const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;
  overflow: hidden;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`

const Excerpt = styled.div`
  & p {
    margin: 0.5em 0;
  }

  & strong {
    font-weight: 600;
  }
`

function BlogPostPreview (props) {
  return (
    <BlogPostLink to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <LeadMediaThumb>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </LeadMediaThumb>
      <Heading3>{props.title}</Heading3>
      {props._rawExcerpt && (
        <Excerpt>
          <BlockText blocks={props._rawExcerpt} />
        </Excerpt>
      )}
    </BlogPostLink>
  )
}

export default BlogPostPreview
