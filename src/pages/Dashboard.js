import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
// import { StackExchangeContext } from '../context/context';
const Dashboard = () => {
  return (
    <main>
     <Navbar />
     <Search />
     <Info />
     <User />
    </main>
  );
};

export default Dashboard;