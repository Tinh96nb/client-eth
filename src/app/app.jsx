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

import { postLogin, getUserMe } from './appReducer'
import { fetchListCategory } from './admin/reducer'

import Home from './home/containers/Home'
import DocumentList from './document/containers/DocList'
import DocumentDetail from './document/containers/DocDetail'
import Member from './member/containers/Member'
import Profile from './profile/containers/Profile'
// admin
import CategoryManager from './admin/containers/Category'
import DocManager from './admin/containers/Document'
import MemManager from './admin/containers/Member'

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
    const { profile } = this.props
    return (
      <Fragment>
        <CheckWeb3
          postLogin={this.props.postLogin}
          getUserMe={this.props.getUserMe}
        >
          <Header profile={profile} />
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
                      <Route path='/member' component={Member} />
                      <Route path='/profile' component={Profile} />
                      {profile && profile.role === 'admin'
                        ? <Fragment>
                          <Route path='/admin/category' component={CategoryManager} />
                          <Route path='/admin/document' component={DocManager} />
                          <Route path='/admin/member' component={MemManager} />
                        </Fragment>
                        : null
                      }
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
    categories: state.admin.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (params, cb) => dispatch(postLogin(params, cb)),
    getUserMe: (params) => dispatch(getUserMe(params)),
    getListCategory: (params) => dispatch(fetchListCategory(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
