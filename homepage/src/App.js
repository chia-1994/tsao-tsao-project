import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from './components/Navebar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/Product_list">
            <Product_list />
          </Route>
          <Route path="/Shop_list">
            <Shop_list />
          </Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
