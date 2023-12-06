import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import PartList from './components/PartList'
import PartDetail from './components/PartDetail'
import BuildList from './components/BuildList'
import BuildDetail from './components/BuildDetail'
import NewBuild from './components/NewBuild'
import Review from './components/ReviewList'

function App() {
  

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/parts' element={ <PartList/> }/>
          <Route path='/parts/:id' element={ <PartDetail/> }/>
          <Route path='/builds' element={ <BuildList/> }/>
          <Route path='/builds/:id' element={ <BuildDetail/> }/>
          <Route path='/create' element={ <NewBuild/> }/>
          <Route path='/review' element={ <Review/> }/>
        </Routes>
      </main>
    </div>
  )
}

export default App
