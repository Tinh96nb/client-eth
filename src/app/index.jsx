import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout'
import SideBar from 'components/ui/SideBar'
import RightSideBar from 'components/ui/RightSideBar'
import DocumentContainer from './document/containers/DocContainer'

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
                {/* <Route path='/' exact component={<>} /> */}
                <Route path='/document/' component={DocumentContainer} />
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
