import React from 'react'
import { DiFirebase, DiReact, DiCodeigniter} from 'react-icons/di'

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the software engineering world.<br/>
      From Back-end To Web Dev and Mobile Dev.<br/>
      I also have led groups of students and completed cool student projects.<br/>
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Tech</ListTitle>
          <ListParagraph>
            React <br />
            React Native <br />
            Firebase<br />
            NextJS<br />
            CSS <br />
            HTML5 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End Tech</ListTitle>
          <ListParagraph>
            NodeJS and Express <br />
            Firebase <br />
            ASP.Net <br />
            MongoDB <br />
            MySQl <br />
            Stripe Payment <br />
            Cloud Service<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          < DiCodeigniter size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Skills</ListTitle>
          <ListParagraph>
            Leadership <br />
            Problem Solving <br />
            Product Management<br />
            Scrume Master<br />
            Agile Development <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
