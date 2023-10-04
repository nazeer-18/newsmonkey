import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default function App (){
  const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_APIKEY;
  const [progress,setProgress] = useState(0);
    return (

      <BrowserRouter>
      <LoadingBar progress={progress} height="3px" shadow="true"/>
        <NavBar />
        <Routes>
          <Route exact path='/'  element = {<News apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} category="general" country="in" /> }></Route>
          <Route exact path='/business'  element = { <News apikey={apikey} setProgress={setProgress} pageSize={pageSize} key="business" category="business" country="in" />}> </Route>
          <Route exact path='/entertainment' element = { <News apikey={apikey} setProgress={setProgress}  key="entertainment" pageSize={pageSize} category="entertainment" country="in" />}></Route>
          <Route exact path='/health' element = { <News apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} category="health" country="in" /> }></Route>
          <Route exact path='/science' element = { <News apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} category="science" country="in" /> }></Route>
          <Route exact path='/sports' element = { <News apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" country="in" /> }></Route>
          <Route exact path='/technology' element = { <News apikey={apikey} setProgress={setProgress} key="techology" pageSize={pageSize} category="technology" country="in" />}> </Route>
        </Routes>
      </BrowserRouter>
    )
}
