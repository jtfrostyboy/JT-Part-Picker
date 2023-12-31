import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import PartList from './components/PartList'
import PartDetail from './components/PartDetail'
import BuildList from './components/BuildList'
import BuildDetail from './components/BuildDetail'
import NewBuild from './components/NewBuild'
import ReviewList from './components/ReviewList'
import ReviewDetail from './components/ReviewDetail'
import CreateReview from './components/CreateReview'
import PartReviews from './components/PartReviews'

function App() {
  

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/parts' element={ <PartList/> }/>
          <Route path='/parts/:id' element={ <PartDetail/> }/>
          <Route path='/parts/:id/:name' element={ <PartReviews/> }/>
          <Route path='/builds' element={ <BuildList/> }/>
          <Route path='/builds/:id' element={ <BuildDetail/> }/>
          <Route path='/create' element={ <NewBuild/> }/>
          <Route path='/review' element={ <ReviewList/> }/>
          <Route path='/review/:id' element={ <ReviewDetail/> }/>
          <Route path='/newreview' element={ <CreateReview/> }/>
        </Routes>
      </main>
    </div>
  )
}

export default App
