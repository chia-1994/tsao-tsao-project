import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from './components/Navebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
