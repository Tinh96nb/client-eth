import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { get } from 'common/helpers/session'
import CheckWeb3 from 'common/helpers/checkWeb3'

import Header from 'components/ui/Header'
import SideBar from 'components/ui/SideBar'
import RightSideBar from 'components/ui/RightSideBar'

import { postLogin, getUserMe, getListCategory } from './appReducer'

import Home from './home/containers/Home'
import DocumentList from './document/containers/DocList'
import DocumentDetail from './document/containers/DocDetail'

export class App extends Component {
  componentWillMount () {
    const token = get()
    if (token) {
      this.props.getUserMe()
    }
    if (!this.props.categories.length) {
      this.props.getListCategory()
    }
  }
  render () {
    return (
      <Fragment>
        <CheckWeb3
          postLogin={this.props.postLogin}
          getUserMe={this.props.getUserMe}
        >
          <Header profile={this.props.profile} />
          <div className='container-fluid'>
            <div className='flex-xl-nowrap row'>
              <Router>
                <Fragment>
                  <SideBar />
                  <RightSideBar categories={this.props.categories} />
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
            </div>
          </div>
        </CheckWeb3>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.app.me,
    categories: state.app.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (params, cb) => dispatch(postLogin(params, cb)),
    getUserMe: (params) => dispatch(getUserMe(params)),
    getListCategory: (params) => dispatch(getListCategory(params))

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
