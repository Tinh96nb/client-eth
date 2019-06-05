import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Table } from 'react-bootstrap'
import { getSumary, getBlockchain } from '../reducer'

class HomeContainer extends Component {
  componentWillMount () {
    this.props.getSumary()
    this.props.getBlockchain()
  }

  render () {
    const { sumary, blocks, transactions } = this.props
    return (
      <div className='dashboard'>
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
        <div className='row'>
          <div className='col-md-6'>
            <Card>
              <Card.Header><h5 className='pull-left'>Latest Blocks</h5></Card.Header>
              <Card.Body>
                <Table striped hover size='sm'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                    </tr>
                  </thead>
                  <tbody />
                </Table>
                {blocks.map(block => {
                  return block.number
                })}
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-6'>
            <Card>
              <Card.Header><h5 className='pull-left'>Latest ransactions</h5></Card.Header>
              <Card.Body>
                <Table striped hover size='sm'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                    </tr>
                  </thead>
                  <tbody />
                </Table>
                {transactions.map(trans => {
                  return trans.hash
                })}
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sumary: state.home.sumary,
    blocks: state.home.blocks,
    transactions: state.home.transactions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSumary: () => dispatch(getSumary()),
    getBlockchain: () => dispatch(getBlockchain())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
