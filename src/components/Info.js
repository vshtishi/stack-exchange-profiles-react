import React from 'react';
import { StackExchangeContext } from '../context/context';
import styled from 'styled-components';
import { HiBadgeCheck } from 'react-icons/hi';
import { GrScorecard } from 'react-icons/gr';
import { SiMicrostrategy } from 'react-icons/si';
import { AiFillTags } from 'react-icons/ai';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const UserInfo = () => {
  const { stackExchangeUser } = React.useContext(StackExchangeContext)
  const { badge_counts, reputation, accept_rate, collectives } = stackExchangeUser
  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
  const tags_count = collectives[0].collective.tags.length


  const badges_sum = sumValues(badge_counts)
  const items = [
    { id: 1, icon: <HiBadgeCheck className="icon" />, label: "badges", value: badges_sum, color: `pink` },
    { id: 2, icon: <GrScorecard className="icon" />, label: "reputation", value: reputation, color: `yellow` },
    { id: 3, icon: <SiMicrostrategy className="icon" />, label: "accept rate", value: accept_rate, color: `purple` },
    { id: 4, icon: <AiFillTags className="icon" />, label: "tags", value: tags_count, color: `green` }

  ]
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map(item => {
          return (
            <Item key={item.id} {...item}></Item>
          )
        })}
      </Wrapper>
    </section>
  )
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
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
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;