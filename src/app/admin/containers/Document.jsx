import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { convertTimeStampToString } from 'common/utils'
import { statusDocument, lableDocument } from 'common/helpers/const'

import { fetchDocument, updateStatusDoc } from '../reducer'

export class ListDoc extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }

    this.handleChangeStatus = this.handleChangeStatus.bind(this)
  }

  componentWillMount () {
    this.props.fetchDocument()
  }

  handleChangeStatus (id, status) {
    this.props.updateStatus({ id, status })
  }

  renderAction (id) {
    return (<div>
      <select
        defaultValue={0}
        onChange={(e) => {
          const status = e.target.value
          this.handleChangeStatus(id, status)
        }
        }>
        <option value={0} disabled>Select status</option>
        <option value={lableDocument.ACEPTED}>ACEPT</option>
        <option value={lableDocument.REJECTED}>REJECT</option>
      </select>
    </div>)
  }

  render () {
    const { documents } = this.props
    return (
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Hash Doc</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Upload at</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => {
            return (
              <tr key={index}>
                <td>{doc.id}</td>
                <td>
                  <Link to={`/document/${doc.id}`}>
                    {doc.name}
                  </Link>
                </td>
                <td>{doc.content_hash}</td>
                <td>{doc.owner}</td>
                <td>
                  <Badge
                    pill
                    variant={statusDocument[doc.status].class}
                  >
                    {statusDocument[doc.status].status}
                  </Badge>
                </td>
                <td>{convertTimeStampToString(doc.created_at)}</td>
                <td>
                  {this.renderAction(doc.id)}
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
    documents: state.admin.documents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDocument: (params) => dispatch(fetchDocument(params)),
    updateStatus: (params, cb) => dispatch(updateStatusDoc(params, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDoc)
