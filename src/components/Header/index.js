import React from 'react'
import { Link } from 'gatsby'

import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { Header, Nav } from './styles'

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
