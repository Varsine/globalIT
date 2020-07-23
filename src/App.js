import React from "react"
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Department from "./components/department/Department"
import Lesson from "./components/lesson/Lesson"
import Service from "./components/services/Service"
import Parthners from "./components/partners/Parthners"
import OurWork from "./components/ourWork/OurWork"
import Subscribe from "./components/subscribe/Subscribe"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <About />
        <Department />
        <Lesson />
        <Service />
        <Parthners />
        <OurWork />
        <Subscribe />
        <Footer />
      </div>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default App
