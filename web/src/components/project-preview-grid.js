import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import ProjectPreview from './project-preview'

import { device } from '../styles/MediaQueries'
import { colors } from '../styles/Variables'
import { typography } from '../styles/Typography'

const ProjectPreviewWrapper = styled.div` 
  margin: 2rem 0 4rem;
`

const Headline = styled.h2` 
  ${typography.small}
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
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media ${device.mediaMinSmall} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mediaMinMedium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const BrowseMoreLink = styled.div` 
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

function ProjectPreviewGrid (props) {
  return (
    <ProjectPreviewWrapper>
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
              <ProjectPreview {...node} />
            </li>
          ))}
      </Grid>
      {props.browseMoreHref && (
        <BrowseMoreLink>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </BrowseMoreLink>
      )}
    </ProjectPreviewWrapper>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
