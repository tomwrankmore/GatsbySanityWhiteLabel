import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import styled from 'styled-components'
import { typography, Heading3 } from '../styles/Typography'

import { responsiveTitle3 } from './typography.module.css'

const ProjectPreviewLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`

const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const StyledExcerpt = styled.div`
  & p {
    margin: 0.5em 0;
  }

  & strong {
    font-weight: 600;
  }
`

const Title = styled(Heading3)`
  @media (hover: hover) {
    .root:hover & {
      text-decoration: underline;
    }
  }
`

function ProjectPreview (props) {
  return (
    <ProjectPreviewLink to={`/project/${props.slug.current}`}>
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
      <Title>{props.title}</Title>
      {props._rawExcerpt && (
        <StyledExcerpt>
          <BlockText blocks={props._rawExcerpt} />
        </StyledExcerpt>
      )}
    </ProjectPreviewLink>
  )
}

export default ProjectPreview
