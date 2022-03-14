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
          👋 I’m a CS grad studnet at Seattle University <br />
          💞️ I’m interested in Web Dev and Distributed System <br />
          🌱 I’m currently learning Software Architecture and API Design <br />
          👀 I’m looking for Part-Time Jobs and Internship/CO-OP Opportunies
          <br />
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
)

export default Hero
