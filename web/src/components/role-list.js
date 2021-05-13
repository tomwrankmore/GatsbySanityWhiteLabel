import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import styled from 'styled-components'
import { colors } from '../styles/Variables'
import { typography } from '../styles/Typography'

const RoleListWrapper = styled.div` 
  margin: 2rem 0 3rem;
  border-top: 1px solid ${colors.colorWhite};
`

const Headline = styled.h2` 
  ${typography.base}
  margin: 0.5rem 0 0;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li` 
  font-size: var(--font-small-size);
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:last-child {
    flex: 1;
    margin-left: 1rem;
  }
`

const Avatar = styled.div` 
  position: relative;
  width: 3em;
  height: 3em;
  background: #eee;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`

function ucfirst (str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

function RoleList ({ items, title }) {
  return (
    <RoleListWrapper>
      <Headline>{title}</Headline>
      <List>
        {items.map(item => (
          <ListItem key={item._key}>
            <div>
              <Avatar>
                {item.person && item.person.image && item.person.image.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(item.person.image))
                      .width(100)
                      .height(100)
                      .fit('crop')
                      .url()}
                    alt=''
                  />
                )}
              </Avatar>
            </div>
            <div>
              <div>
                <strong>{(item.person && item.person.name) || <em>Missing</em>}</strong>
              </div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>
                      case idx === item.roles.length - 1:
                        return <span key={role}> & {role}</span>
                      default:
                        return <span key={role}>, {role}</span>
                    }
                  })}
                </div>
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </RoleListWrapper>
  )
}

export default RoleList
