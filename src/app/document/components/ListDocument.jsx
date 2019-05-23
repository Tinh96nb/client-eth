import React, { Component } from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Link } from 'react-router-dom'
import { convertTimeStampToString } from 'common/helpers/untils'
import { statusDocument } from 'common/helpers/const'

export default class ListDoc extends Component {
  constructor (props) {
    super(props)
    this.state = {
      docSelecting: null,
      isshowModalDel: false,
      alertSuccess: ''
    }

    this.renderTableDoc = this.renderTableDoc.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete () {
    const cb = (response) => {
      if (response) {
        this.setState({
          alertSuccess: (
            <SweetAlert success title=''
              onConfirm={() => this.setState({ alertSuccess: null })}>
            Product has been removed!
            </SweetAlert>
          ),
          isshowModalDel: false
        })
      }
    }
    const params = {
      id: this.state.docSelecting.u_id
    }

    this.props.deleteDocument(params, cb)
  }

  renderModal () {
    return (
      <>
        {this.state.isshowModalDel
          ? (<SweetAlert
            warning
            title='Are you sure?'
            html
            showCancel
            confirmBtnText='Yes, delete it!'
            cancelBtnBsStyle='default'
            confirmBtnBsStyle='danger'
            onConfirm={() => this.handleDelete()}
            onCancel={() => this.setState({
              idSelecting: null,
              isshowModalDel: false
            })}
          />)
          : null
        }
        {this.state.alertSuccess}
      </>
    )
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
            <th>Status</th>
            <th>Upload at</th>
            <th />
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
                <td>
                  <Badge
                    pill
                    variant={statusDocument[1].class}
                  >
                    {statusDocument[1].status}
                  </Badge>
                </td>
                <td>{convertTimeStampToString(doc.created_at)}</td>
                <td>
                  <Button
                    variant='primary'
                    size='sm'
                    onClick={(e) => this.props.handleSelectDoc(doc)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={(e) => this.setState({
                      docSelecting: doc,
                      isshowModalDel: true
                    })}
                  >
                    Delete
                  </Button>
                </td>
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
        {this.renderModal()}
      </>
    )
  }
}
