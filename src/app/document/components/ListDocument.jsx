import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { convertTimeStampToString } from 'common/helpers/untils'

export default class ListDoc extends Component {
  constructor (props) {
    super(props)

    this.renderTableDoc = this.renderTableDoc.bind(this)
  }

  renderTableDoc (documents) {
    return (
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Hash Doc</th>
            <th>Owner</th>
            <th>Upload at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => {
            return (
              <tr key={index}>
                <td>{doc.u_id}</td>
                <td>
                  <Link to={`/document/${doc.u_id}`}>
                    {doc.name}
                  </Link>
                </td>
                <td>{doc.content_hash}</td>
                <td>{doc.owner}</td>
                <td>{convertTimeStampToString(doc.created_at)}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  render () {
    const { documents } = this.props
    return (
      <>
        {this.renderTableDoc(documents)}
      </>
    )
  }
}
