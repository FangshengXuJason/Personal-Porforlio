import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
          I'm Fanghsheng Xu
        </SectionTitle>
        <SectionText>
          👋 I’m a full-stack developer at Hawx Smart Pest Control <br />
          🌱 I am part of the modernization process of a traditional company<br />
          💞️ My specialty is in Web Dev, Mobile Dev and DB system. <br />
          {/* 👀 Looking full-time software engineer positions <br /> */}
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
)

export default Hero
