import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styled from 'styled-components'
import { device } from '../styles/MediaQueries'
import { typography, Heading1 } from '../styles/Typography'
import { colors } from '../styles/Variables'

const BlogArticle = styled.article` 
  /* No styles yet */
`

const MainImage = styled.div`
  position: relative;
  background: #eee;
  padding-bottom: calc(9 / 16 * 80%);
  overflow: hidden;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
    display: block;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3em;

  @media ${device.mediaMinMedium} {
    grid-template-columns: 3fr 1fr;
  }
`

const MainContent = styled.div`
  & a {
    color: ${colors.colorAccent};
    
    @media (hover: hover) {
      &:hover {
        color: inherit;
      }
    }
  }
`
const MetaContent = styled.aside`
  /* no style yet */
`

const PublishedAt = styled.div`
  margin: 1.5rem 0 3rem;
  /* ${typography.small} */
`
const Categories = styled.div`
  border-top: 1px solid ${colors.colorBlack};;
  margin: 2rem 0 3rem;

  & ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  & ul li {
    padding: 0.25rem 0;
  }
`

const CategoriesHeadline = styled.h3`
  margin: 0.5rem 0 0;
  /* ${typography.base} */
`

function BlogPost (props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (
    <BlogArticle>
      {mainImage && mainImage.asset && (
        <MainImage>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </MainImage>
      )}
      <Container>
        <Grid>
          <MainContent>
            <Heading1>{title}</Heading1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </MainContent>
          <MetaContent>
            {publishedAt && (
              <PublishedAt>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </PublishedAt>
            )}
            {authors && <RoleList items={authors} title='Authors' />}
            {categories && (
              <Categories>
                <CategoriesHeadline>Categories</CategoriesHeadline>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </Categories>
            )}
          </MetaContent>
        </Grid>
      </Container>
    </BlogArticle>
  )
}

export default BlogPost
