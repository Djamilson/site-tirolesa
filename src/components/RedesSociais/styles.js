import styled from '@emotion/styled'
import { darken } from "polished"
export const Header = styled.header`

  background: ${darken(0.08, "#108C44")};
  width: 100%;
  max-height: 120px;
  padding: 3.3em 0;
`
export const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.3em;

  ul {
    display: flex;
    justify-content:center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
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
