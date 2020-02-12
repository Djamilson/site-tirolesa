import styled from '@emotion/styled'

export const Header = styled.header`
  background: #3D8C38;
  width: 100%;
  padding: 1.3em 0;
`
export const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.3em;

  margin-right: 10px;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;

    @media (max-width: 370px) {
      display: none;
    }

    &:hover {
      opacity: 0.4;
      transform: translateY(-5px);
      transition: all 0.2s;
    }
  }
`
