import React from 'react'
import { differenceInDays } from 'date-fns'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const calculateYearsAgo = (date) => {
  const today = new Date()

  // Get the difference in days between the two dates
  const diffInDays = differenceInDays(today, date)

  // Convert the difference to years with decimal
  const yearsAgo = diffInDays / 365.25 // account for leap years

  return yearsAgo.toFixed(1) // rounding to one decimal place
}

// I remember it was near mid June so I picked June 15, 2022
const startDateAtHawxPestControl = new Date(2022, 5, 15)

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
          I'm Fanghsheng Xu
        </SectionTitle>
        <SectionText>
          Software Engineer with {calculateYearsAgo(startDateAtHawxPestControl)}{' '}
          years of full stack web and mobile development experience specializing
          in React, React Native, NodeJS, and PostgreSQL.
          <br />
          <br />
          Driving the modernization and digitalization of Hawx Pest Control
          <br />
          <br />
          Passionate about applying my technical and collaboration skills to
          solve business problems.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
)

export default Hero
