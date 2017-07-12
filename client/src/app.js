import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import initialStore from './initialStore'
import Provider from './lib/provider'
import AppContent from './comp/appContent'
import Contacts from './comp/contacts'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={initialStore}>
            <Router>
                <Switch>
                    <Route path="/dashboard" component={AppContent} />
                    <Route path="/contacts" component={Contacts} />
                    <Redirect from="/" to="dashboard" />
                </Switch>
            </Router>
        </Provider>
      </div>
    )
  }
}

export default App
