import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Badge, Card } from 'react-bootstrap'
import { statusMember } from 'common/helpers/const'
import { fetchListMember } from '../reducer'

class MemberContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount () {
    this.props.fetchListMember()
  }

  render () {
    const { members } = this.props
    return (
      <>
        <Card border='light'>
          <Card.Header>
            <h5 className='pull-left'>List Member</h5>
          </Card.Header>
        </Card>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th style={{ width: '50px' }}>#</th>
              <th>Address</th>
              <th>Balance</th>
              <th style={{ width: '80px' }}>Status</th>
              <th style={{ width: '80px' }}>N.Doc</th>
            </tr>
          </thead>
          <tbody>
            {members.map((mem, index) => {
              return (
                <tr key={index}>
                  <td>{mem.id}</td>
                  <td>
                    <Link to={`/document?member=${mem.address}`}>
                      {mem.address}
                    </Link>
                  </td>
                  <td>{mem.balance}</td>
                  <td>
                    <Badge
                      pill
                      variant={statusMember[mem.status].class}
                    >
                      {statusMember[mem.status].status}
                    </Badge>
                  </td>
                  <td>{mem.num_doc}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    members: state.mem.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListMember: (params) => dispatch(fetchListMember(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberContainer)
