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
// import { StackExchangeContext } from '../context/context';
const Dashboard = () => {
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
