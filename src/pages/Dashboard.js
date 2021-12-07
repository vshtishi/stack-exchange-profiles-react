import React from 'react'
import {
  Info,
  Answers,
  User,
  Search,
  Navbar,
  Badges,
  Tags,
} from '../components'
import loadingImage from '../images/preloader.gif'
import { StackExchangeContext } from '../context/context'
const Dashboard = () => {
  const { isLoading } = React.useContext(StackExchangeContext)
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loading' />
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Answers />
      <Badges />
    </main>
  )
}

export default Dashboard
