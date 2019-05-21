import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout'
import SideBar from 'components/ui/SideBar'
import RightSideBar from 'components/ui/RightSideBar'

import Home from './home/containers/Home'
import DocumentList from './document/containers/DocList'
import DocumentDetail from './document/containers/DocDetail'

class App extends Component {
  render () {
    return (
      <Layout>
        <Router>
          <Fragment>
            <SideBar />
            <RightSideBar />
            <div className='main col-xl-8 col-md-9 col-12'>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/document/:id' component={DocumentDetail} />
                <Route path='/document' component={DocumentList} />
                <Route component={() => (<p>Not Found</p>)} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Layout>
    )
  }
}

export default App
