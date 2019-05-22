import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { convertTimeStampToString } from 'common/helpers/untils'
import { Heading } from 'components/common'
import { get } from 'common/helpers/session'
import { fetchDocumentById } from '../reducer'

import ModalAdd from '../components/ModalAdd'

class DocDetailContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowModalAdd: false,
      isShowModalUpdate: false
    }
  }

  componentWillMount () {
    const { id } = this.props.match.params
    this.props.fetchDocumentById({ id })
  }

  handeDownloadfile (id) {
    const token = get()
    const link = `http://localhost:3000/documents/file/${id}?access_token=${token}`
    return (
      <a href={link} target='blank'>Download</a>
    )
  }

  render () {
    const document = this.props.document
    return (
      <div>
        <Heading text={document} />
        {document
          ? <Table striped bordered hover size='sm'>
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
              <tr>
                <td>{document.u_id}</td>
                <td>
                  {document.name}
                </td>
                <td>{document.content_hash}</td>
                <td>{document.owner}</td>
                <td>{convertTimeStampToString(document.created_at)}</td>
                <td>{this.handeDownloadfile(document.u_id)}</td>
              </tr>
            </tbody>
          </Table>
          : ''}
        <ModalAdd />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    document: state.doc.one
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDocumentById: (params) => dispatch(fetchDocumentById(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocDetailContainer)
