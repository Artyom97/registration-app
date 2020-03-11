import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './components/global.css';
import LoginTab from "./components/LoginTab";
import Demo from './components/RegistrationTab';
import Header from './components/Header';
import Profile from "./components/Profile";
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('currentUser');
        if (token) {
            axios.get(`http://localhost:4000/users/current`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
            })
                .then(result => {
                    this.setUser(result.data);
                });
        }
    };

    setUser = (user) => {
        this.setState({
           user
        });
    };

    render = () => (
        <div>
            <BrowserRouter>
                <Header isAuth={!! this.state.user}  history={this.props.history} setUser={this.setUser} />
                <Switch>
                    <Route exact path='/login' render={(props) => <LoginTab setUser={this.setUser} {...props} />} />
                    <Route exact path='/registration' component={Demo} />
                    <Route exact path='/profile' render={(props) => <Profile userData={this.state.user}  {...props} />  } />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;
