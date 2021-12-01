import React from 'react'
import { StackExchangeContext } from '../context/context'
import styled from 'styled-components'
import { AiFillTags } from 'react-icons/ai'

const Tags = () => {
  const { stackExchangeUser } = React.useContext(StackExchangeContext)
  console.log(stackExchangeUser.collectives[0])
  return (
    <Wrapper>
      <div className='questions'>
        {stackExchangeUser.collectives[0].collective.tags.map((tag, index) => {
          return (
            <article key={index}>
              <span className='green'>
                <AiFillTags className='icon' />
              </span>
              <div>
                <h4 dangerouslySetInnerHTML={{ __html: '#' + tag }} />
              </div>
            </article>
          )
        })}
        <br />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: ' questions';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    margin-top: 30px;
    padding-top: 40px;
  }
  span {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }
  .icon {
    font-size: 1.5rem;
  }
  .green {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  .questions {
    overflow: scroll;
    height: 400px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(70px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 10px;
      margin-top: 10px;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      -webkit-letter-spacing: var(--spacing);
      -moz-letter-spacing: var(--spacing);
      -ms-letter-spacing: var(--spacing);
      letter-spacing: var(--spacing);
      -webkit-transition: var(--transition);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
`
export default Tags
