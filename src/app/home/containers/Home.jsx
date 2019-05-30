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
      <div className='dashboard'>
        - check status member moi cho vao, xoa token, prop text vao trang metamask
        - log activiti ngoai daskbroad
        - hien thi link ipfs khi crated success
        - search document
        - bat request fail, notify
        <div className='row'>
          <div className='col-md-4 col-sm-6 col-xs-12'>
            <div className='info-box'>
              <span className='info-box-icon bg-primary'>
                <i className='fa fa-file-text' aria-hidden='true' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Document</span>
                <span className='info-box-number'>90</span>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6 col-xs-12'>
            <div className='info-box'>
              <span className='info-box-icon bg-info'>
                <i className='fa fa-indent' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Category</span>
                <span className='info-box-number'>90</span>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6 col-xs-12'>
            <div className='info-box'>
              <span className='info-box-icon bg-success'>
                <i className='fa fa-user' aria-hidden='true' />
              </span>

              <div className='info-box-content'>
                <span className='info-box-text'>Member</span>
                <span className='info-box-number'>90</span>
              </div>
            </div>
          </div>
        </div>
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
