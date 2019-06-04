import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSumary } from '../reducer'

class HomeContainer extends Component {
  componentWillMount () {
    this.props.getSumary()
  }

  render () {
    const { sumary } = this.props
    return (
      <div className='dashboard'>
        - log activiti ngoai dashboard
        {sumary && <div className='row'>
          <div className='col-md-4 col-sm-6 col-xs-12'>
            <div className='info-box'>
              <span className='info-box-icon bg-primary'>
                <i className='fa fa-file-text' aria-hidden='true' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Document</span>
                <span className='info-box-number'>{ sumary.document }</span>
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
                <span className='info-box-number'>{ sumary.category }</span>
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
                <span className='info-box-number'>{ sumary.member }</span>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sumary: state.home.sumary
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSumary: () => dispatch(getSumary())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
