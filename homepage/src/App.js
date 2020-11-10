import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from './components/Navebar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Product from './pages/Product'
//member
import MemberMain from './member/mcomponents/MemberMain'
import MemberHome from './pages/MemberHome'
import MemberRoot from './pages/MemberRoot'
//article
import ArticleList from './pages/ArticleList'

function App() {
  //設定登入登出的狀態
  const [isAuth, setisAuth] = useState(false)

  if (isAuth === false) {
    localStorage.removeItem('memberLogInInfo')
  }

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/articleList">
              <ArticleList />
            </Route>
            <MemberMain>
              <Route path="/">
                <MemberHome />
              </Route>
              <Route path="/memberroot">
                <MemberRoot />
              </Route>
            </MemberMain>
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  )
}

export default App
