import React, { Component } from 'react'
//React Router
import { Route, Switch } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Select from '../pages/select/Select'
import Multi from '../pages/multi/Multi'
import Checkbox from '../pages/Checkbox'
import Radio from '../pages/Radio'

class Routes extends Component {
  render() {
    return (
      <section className="content main-content">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/Select' component={Select} />
          <Route exact path='/Multi' component={Multi} />
          <Route exact path='/Checkbox' component={Checkbox} />
          <Route exact path='/Radio' component={Radio} />
        </Switch>
      </section>
    );
  }
}

export default Routes
