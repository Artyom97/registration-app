import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './components/global.css';
import LoginTab from "./components/LoginTab";
import Demo from './components/RegistrationTab';
import Header from './components/Header';
import {Route, Switch, BrowserRouter} from 'react-router-dom';


class App extends Component {
  render = () => (
      <div>
          <BrowserRouter>
              <Header />
              <Switch>
                  <Route exact path='/loginTab' component={LoginTab}/>
                  <Route exact path='/registrationTab' component={Demo}/>
              </Switch>
          </BrowserRouter>
      </div>
  )
}

export default App;
