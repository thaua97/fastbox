import React from 'react'

import { Container, Section, Items } from './styles'


export default function Content (props) {
    return (
      <Section>
        <Container >
          <Items>
            { props.children }
          </Items>
        </Container>
      </Section>
    )
}