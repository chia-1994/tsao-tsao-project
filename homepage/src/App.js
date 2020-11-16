import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from './components/Navebar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
//首頁
import Home from './pages/Home'
//原商品
import Product from './pages/Product'
//member
import MemberMain from './member/mcomponents/MemberMain'
import MemberHome from './pages/MemberHome'
import MemberRoot from './pages/MemberRoot'
//article
import ArticleList from './pages/ArticleList'
//product
import ProductList from './pages/ProductList'
import ShopList from './pages/ShopList'
import ProductData from './pages/ProductData'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
//活動
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'

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
              <Product isAuth={isAuth} setisAuth={setisAuth} />
            </Route>
            <Route path="/ProductList">
              <ProductList />
            </Route>
            <Route path="/ShopList/:category?/:sid?/ ">
              <ShopList />
            </Route>
            <Route path="/ProductData/:sid?">
              <ProductData />
            </Route>
            <Route path="/ProductAdd">
              <ProductAdd />
            </Route>
            <Route path="/ProductEdit/:sid?">
              <ProductEdit />
            </Route>
            <Route path="/articleList">
              <ArticleList />
            </Route>
            <Route path="/CourseList">
              <CourseList />
            </Route>
            <Route path="/CourseDetail/:id?">
              <CourseDetail />
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
