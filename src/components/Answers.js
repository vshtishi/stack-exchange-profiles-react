import React from 'react'
import styled from 'styled-components'
import { StackExchangeContext } from '../context/context'
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
const Answers = () => {
  const { answers } = React.useContext(StackExchangeContext)
  let acceptedAnswers = answers.items.reduce((total, item) => {
    const { is_accepted } = item
    console.log(is_accepted)
    if (is_accepted) {
      if (!('isAccepted' in total)) {
        total['isAccepted'] = { label: 'Accepted', value: 1 }
      } else {
        total['isAccepted'] = {
          ...total['isAccepted'],
          value: total['isAccepted'].value + 1,
        }
      }
    } else {
      if (!('notAccepted' in total)) {
        total['notAccepted'] = { label: 'Not Accepted', value: 1 }
      } else {
        total['notAccepted'] = {
          ...total['notAccepted'],
          value: total['notAccepted'].value + 1,
        }
      }
    }
    return total
  }, {})

  acceptedAnswers = Object.values(acceptedAnswers)
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={acceptedAnswers} />
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
