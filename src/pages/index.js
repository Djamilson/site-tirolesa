import React from "react"
import {  graphql } from "gatsby"
import Img from "gatsby-image"
import { darken } from "polished"

import Layout from "../components/layout"

import SEO from "../components/seo"

import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 630px) {
      grid-template-columns: 1fr;
    }
  }
`
const ImageStyled = styled(Img)`
  border-radius: 5px;
  margin-bottom: 1.45rem;
`
const ContainerImage = styled.div`
  max-width: 530px;
  margin-bottom: 1.45rem;
`
const OrderLI = styled.li`
  padding: 5px;
  border-radius: 4px;
  background: #fff;
  div {
    margin-top: 3px;

    h2 {
      display: block;
      font-weight: normal;
    }
    strong {
      margin-top: 7px;
      margin-bottom: 7px;
      display: block;
      color: #999;
      font-size: 16px;
      font-weight: normal;
    }

    p {
      display: block;
      color: #666;
      font-size: 16px;
      font-weight: normal;
    }
  }
`

const Content = styled.div`
  display: flex;
  align-self: center;
  align-items: center;

  flex-direction: column;
  align-content: center;
  padding: 25px;

  border-radius: 4px;
  margin-bottom: 1.45rem;
  height: 120px;
  background: ${darken(0.08, "#f64c75")};
  h1 {
    padding-top: 0 10px 10px;
    color: #fff;
    font-size: 26px;
    font-kerning: auto;

    font-weight: normal;
    text-align: center;
  }
  h2 {
    padding-top: 10px;
    color: #fff;
    text-align: left;
    font-size: 18px;

    font-weight: normal;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? "1" : "0")};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <ul>
        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageOne.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>

          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageTwo.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageThree.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>
        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageFour.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageFive.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageSix.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>
        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageServen.childImageSharp.fluid}
              alt="headshot"
            />

            <h2>Teste</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>
        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageFive.childImageSharp.fluid}
            />
            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageSix.childImageSharp.fluid}
            />
            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageServen.childImageSharp.fluid}
            />
            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageFour.childImageSharp.fluid}
            />
            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageThree.childImageSharp.fluid}
            />
            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageTwo.childImageSharp.fluid}
            />
            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>

        <OrderLI>
          <ContainerImage>
            <ImageStyled
              alText="Monster P. Whittington portrait"
              title="Monster P. Whittington"
              user="monster1"
              name="imageOne"
              fluid={props.data.imageOne.childImageSharp.fluid}
            />

            <h2>Cachoeiras ...</h2>
            <strong>Now go build something great.</strong>
            <p>Welcome to your new Gatsby site.</p>
          </ContainerImage>
        </OrderLI>
        <OrderLI>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </OrderLI>
      </ul>
      <Content>
        <h1>
          Traga a sua família para desfrutar das belezas mais belas do
          Tocantins!
        </h1>
        <h2>Venha para a Tiroleza de Taquaruçu</h2>
      </Content>

    </Container>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "01.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "02.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "03.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "04.jpeg" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "05.jpg" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "06.jpg" }) {
      ...fluidImage
    }
    imageServen: file(relativePath: { eq: "07.jpg" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "08.jpg" }) {
      ...fluidImage
    }
    imageNine: file(relativePath: { eq: "09.jpg" }) {
      ...fluidImage
    }
    imageTen: file(relativePath: { eq: "010.jpg" }) {
      ...fluidImage
    }
    imageEleven: file(relativePath: { eq: "011.jpg" }) {
      ...fluidImage
    }
    imageTwelve: file(relativePath: { eq: "mountain1280.jpg" }) {
      ...fluidImage
    }
    imageTwelve: file(relativePath: { eq: "mountain1280.jpg" }) {
      ...fluidImage
    }
    imageThirteen: file(relativePath: { eq: "mountain1280.jpg" }) {
      ...fluidImage
    }
    imageFourteen: file(relativePath: { eq: "mountain1280.jpg" }) {
      ...fluidImage
    }
    imageFifteen: file(relativePath: { eq: "mountain1280.jpg" }) {
      ...fluidImage
    }
  }
`
