import React from 'react'
import styled from 'styled-components'
import { StackExchangeContext } from '../context/context'
import { Doughnut3D } from './Charts'
import Tags from './Tags'
const Badges = () => {
  const { stackExchangeUser } = React.useContext(StackExchangeContext)

  let badges = Object.entries(stackExchangeUser.badge_counts).map(
    ([key, val]) => ({
      label: key,
      value: val,
    })
  )

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Doughnut3D data={badges} />
        {stackExchangeUser.collectives && <Tags />}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Badges
