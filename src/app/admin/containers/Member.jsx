import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { statusMember, lableMember } from 'common/helpers/const'
import {
  fetchListMember,
  updateStatusMember,
  createMember
} from '../reducer'
import { convertTimeStampToString } from 'common/utils'

class MemberContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
  }

  componentWillMount () {
    this.props.fetchListMember()
  }

  handleChangeStatus (id, status) {
    this.props.updateStatusMember({ id, status })
  }

  render () {
    const { members } = this.props
    return (
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>Balance</th>
            <th>created_at</th>
            <th>Number doc</th>
            <th>Status</th>
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
                <td>{convertTimeStampToString(mem.created_at)}</td>
                <td>{mem.num_doc}</td>
                <td>
                  <OverlayTrigger
                    placement={'right'}
                    overlay={<Tooltip>
                      Click to {mem.status !== lableMember.BLOCK ? 'BLOCK' : 'ACTIVE'}
                    </Tooltip>}
                  >
                    <Badge
                      onClick={() => this.handleChangeStatus(
                        mem.id,
                        mem.status !== lableMember.BLOCK ? lableMember.BLOCK : lableMember.ACTIVE
                      )}
                      pill
                      variant={statusMember[mem.status].class}
                    >
                      {statusMember[mem.status].status}
                    </Badge>
                  </OverlayTrigger>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => {
  return {
    members: state.admin.members
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListMember: (params) => dispatch(fetchListMember(params)),
    updateStatusMember: (params, cb) => dispatch(updateStatusMember(params, cb)),
    createMember: (params, cb) => dispatch(createMember(params, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberContainer)
