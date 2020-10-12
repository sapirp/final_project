import React, { Component } from "react";

import { Provider } from 'react-redux';

//import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

//components:
//import Navbar from "./components/Navbar/Navbar"
//import BootstrapNavbar from "./components/BootstrapNavbar"
//import Header from "./components/Header"
//import Main from "./components/MainPage"
//import GoodToKnow from "./components/GoodToKnow"
import WellCare from "./components/WellCare/WellCare"
import NewWellCare from "./components/WellCare/NewWellCare"
import DiaperTrack from "./components/DiaperTrack/DiaperTrack"
import Diaper from "./components/DiaperTrack/Diaper"
import FeedingTrack from "./components/FeedingTrack/FeedingTrack"
import Feeding from "./components/FeedingTrack/Feeding"
import MainPageAuth from "./components/MainPageAuth";
import MainPage from "./components/MainPage";
import Register from "./components/auth/Register"

import store from './store'
import { loadUser } from './actions/authActions'



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>

            <Route exact path="/" component={MainPage} />
            <Route exact path="/main" component={MainPageAuth} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/well_care" component={WellCare} />
            <Route exact path="/feeding" component={Feeding} />
            <Route exact path="/diaper" component={Diaper} />
            <Route exact path="/new_well_care" component={NewWellCare} />
            <Route exact path="/new_feeding" component={FeedingTrack} />
            <Route exact path="/new_diaper" component={DiaperTrack} />



          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
