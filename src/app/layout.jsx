import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import 'css/main.css'
import CheckWeb3 from 'utils/helper/checkWeb3'
import Header from 'components/ui/Header'

class LayoutContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Fragment>
        <CheckWeb3>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer)

export default Layout
