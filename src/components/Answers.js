import React from 'react'
import styled from 'styled-components'
import { StackExchangeContext } from '../context/context'
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
const Answers = () => {
  const chartData = [
    {
      label: 'Accepted',
      value: '290',
    },
    {
      label: 'Not Accepted',
      value: '260',
    },
  ]

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={chartData} />
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

export default Answers
