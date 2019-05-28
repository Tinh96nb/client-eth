import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowUpload: false
    }
  }

  render () {
    return (
      <div>
        home
        - check status member moi cho vao
        - log activiti
        - dashbroad
        - bat request fail, notify
        - refactor layotu
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.doc.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
