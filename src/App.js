import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'


import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/include/Main';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The App component sets up the main application structure using React Router.
 * It includes the Header and Footer components, and a Main component that
 * contains all the Routes for different pages. Each Route is associated with
 * a specific component, rendering the appropriate content based on the URL path.
 * 
 * Routes:
 * - '/' renders the Home component
 * - '/today' renders the Today component
 * - '/developer' renders the Developer component
 * - '/webd' renders the Webd component
 * - '/website' renders the Website component
 * - '/gsap' renders the Gsap component
 * - '/port' renders the Port component
 * - '/youtube' renders the Youtube component
 * - '/channel/:channelId' renders the Channel component with a dynamic channelId
 * - '/video/:videoId' renders the Video component with a dynamic videoId
 * - '/search/:searchId' renders the Search component with a dynamic searchId
 * - '*' renders the Not component for any unmatched paths
 */

/******  14207624-1b9a-41b6-b302-f9a4d28226fd  *******/
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/developer' element={<Developer />} />
          <Route path='/webd' element={<Webd />} />
          <Route path='/website' element={<Website />} />
          <Route path='/gsap' element={<Gsap />} />
          <Route path='/port' element={<Port />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/video/:videoId' element={<Video />} />
          <Route path='/search/:searchId' element={<Search />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
