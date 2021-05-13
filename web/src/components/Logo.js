import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export function Logo () {
  return (
    <StaticImage
      src='../assets/images/nav-logo-trans.png'
      alt='Logo'
      placeholder='none'
      layout='fixed'
      height={78}
      width={150}
      quality={50}
    />
  )
}
