import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './components/global.css';
import LoginTab from "./components/LoginTab";
import Demo from './components/RegistrationTab';
import Header from './components/Header';
import UserPage from './components/UserPage';
import {Route, Switch, BrowserRouter} from 'react-router-dom';


class App extends Component {
  render = () => (
      <div>
          <Header />
          <BrowserRouter>
              <Switch>
                  <Route exact path='/loginTab' component={LoginTab}/>
                  <Route exact path='/registrationTab' component={Demo}/>
                  <Route exact path='/userPage' component={UserPage}/>
              </Switch>
          </BrowserRouter>
      </div>
  )
}

export default App;
