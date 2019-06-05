import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Table, Button } from 'react-bootstrap'
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
          <div className='col-md-3 col-sm-6 col-xs-12'>
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
          <div className='col-md-3 col-sm-6 col-xs-12'>
            <div className='info-box'>
              <span className='info-box-icon bg-info'>
                <i className='fa fa-list' />
              </span>
              <div className='info-box-content'>
                <span className='info-box-text'>Category</span>
                <span className='info-box-number'>{ sumary.category }</span>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 col-xs-12'>
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
          <div className='col-md-3 col-sm-6 col-xs-12'>
            <div className='info-box'>
              <span className='info-box-icon bg-danger'>
                <i className='fa fa-codepen' aria-hidden='true' />
              </span>

              <div className='info-box-content'>
                <span className='info-box-text'>Block</span>
                <span className='info-box-number'>{ blocks.length }</span>
              </div>
            </div>
          </div>
        </div>
        }
        <div className='row blockchain'>
          <div className='col-md-6'>
            <Card>
              <Card.Header><h5 className='pull-left'>Latest Blocks</h5></Card.Header>
              <Card.Body>
                <Table hover size='sm'>
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>#</th>
                      <th>Hash</th>
                      <th>Miner</th>
                      <th style={{ width: '10%' }} />
                    </tr>
                  </thead>
                  <tbody>
                    {blocks.map((block, index) => {
                      return (
                        <tr key={index}>
                          <td>{block.number}</td>
                          <td>{block.hash.substring(0, 12)}...</td>
                          <td>{block.miner.substring(0, 12)}...</td>
                          <td>
                            <Button
                              variant='primary'
                              size='sm'
                              onClick={(e) => this.handleShowBlock(block)}
                            >
                              <i className='fa fa-eye' aria-hidden='true' />
                            </Button></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-6'>
            <Card>
              <Card.Header><h5 className='pull-left'>Latest ransactions</h5></Card.Header>
              <Card.Body>
                <Table hover size='sm'>
                  <thead>
                    <tr>
                      <th>Tx</th>
                      <th>Form</th>
                      <th>To</th>
                      <th style={{ width: '10%' }} />
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((trans, index) => {
                      return (
                        <tr key={index}>
                          <td>{trans.hash.substring(0, 9)}...</td>
                          <td>{trans.from.substring(0, 9)}...</td>
                          <td>
                            {trans.to
                              ? trans.to.substring(0, 9)
                              : 'null'
                            }...
                          </td>
                          <td>
                            <Button
                              variant='primary'
                              size='sm'
                              onClick={(e) => this.handleShowTrans(trans)}
                            >
                              <i className='fa fa-eye' aria-hidden='true' />
                            </Button></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
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
