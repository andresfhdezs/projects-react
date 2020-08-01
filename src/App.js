import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectCreate from './components/projects/ProjectCreate';
import NotFound from './components/layout/NotFound';
import Profile from './components/user/profile';
import { Home } from './components/landing/Home';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/projects/create' component={ProjectCreate} />
            <Route path='/profile' component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
