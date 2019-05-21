import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import 'css/main.css'
import CheckWeb3 from 'common/helpers/checkWeb3'
import Header from 'components/ui/Header'
import { get } from 'common/helpers/session'

import { postLogin, getUserMe } from './appReducer'

class LayoutContainer extends Component {
  componentWillMount () {
    const token = get()
    if (token) {
      this.props.getUserMe()
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
              {this.props.children}
            </div>
          </div>
        </CheckWeb3>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (params, cb) => dispatch(postLogin(params, cb)),
    getUserMe: (params) => dispatch(getUserMe(params))
  }
}

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer)

export default Layout
