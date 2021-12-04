import React from 'react'
import { StackExchangeContext } from '../context/context'
import styled from 'styled-components'
import { AiFillTags } from 'react-icons/ai'

const Tags = () => {
  const { stackExchangeUser } = React.useContext(StackExchangeContext)
  return (
    <Wrapper>
      <div className='tags'>
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
    content: ' tags';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
    margin-top: 25px;
    padding-right: 15px;
    padding-left: 5px;
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
  .tags {
    overflow: scroll;
    height: 400px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(70px, 1fr));
    gap: 1rem 1rem;
    padding: 2rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    margin-top: 20px;
    margin-left: 20px;
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
