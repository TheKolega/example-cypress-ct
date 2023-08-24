import React from "react"
import styled from "styled-components"

export default function Post(props) {
  return (
    <article>
      <Title>{props.title}</Title>

      <Content>{props.children}</Content>

      <Footer>Published on {props.date}</Footer>
    </article>
  )
}

let Title = styled.h1`
  margin-bottom: 24px;
`

let Content = styled.div`
  margin-bottom: 24px;

  p:not(:last-child) {
    margin-bottom: 8px;
  }
`

let Footer = styled.footer`
  border-top: 1px solid #000;
  padding-top: 24px;
`
