import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import Friend from './Friend'

class App extends React.Component {


  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Friend} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App;
