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
          👋 I’m a CS grad student at Seattle University <br />
          💞️ I’m interested in Web Dev, Mobile Dev and Distributed System <br />
          🌱 I’m currently learning Firebase and React Native<br />
          👀 I’m looking full-time software engineering positions<br />
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
)

export default Hero
