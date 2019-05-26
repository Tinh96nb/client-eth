import React, { Component } from 'react'
import { Table, Button, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Link } from 'react-router-dom'
import { convertTimeStampToString } from 'common/utils'
import { statusDocument, lableDocument } from 'common/helpers/const'

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
    this.handleChangeStatus = this.handleChangeStatus.bind(this)
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
      id: this.state.docSelecting.id
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

  handleChangeStatus (id, status) {
    this.props.updateStatus({ id, status })
  }

  renderStatus (id, status) {
    if (status === lableDocument.CLOSED) {
      return (
        <OverlayTrigger
          placement={'right'}
          overlay={<Tooltip>Click to PUBLIC</Tooltip>}
        >
          <Badge
            onClick={this.handleChangeStatus(id, lableDocument.PENDDING)}
            pill
            variant={statusDocument[status].class}
          >
            {statusDocument[status].status}
          </Badge>
        </OverlayTrigger>
      )
    }
    if (status === lableDocument.ACEPTED) {
      return (
        <OverlayTrigger
          placement={'right'}
          overlay={<Tooltip>Click to PRIVATE</Tooltip>}
        >
          <Badge
            onClick={this.handleChangeStatus(id, lableDocument.CLOSED)}
            pill
            variant={statusDocument[status].class}
          >
            {statusDocument[status].status}
          </Badge>
        </OverlayTrigger>
      )
    }
    return <Badge
      pill
      variant={statusDocument[status].class}
    >
      {statusDocument[status].status}
    </Badge>
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
                <td>{doc.id}</td>
                <td>
                  <Link to={`/document/${doc.id}`}>
                    {doc.name}
                  </Link>
                </td>
                <td>{doc.content_hash}</td>
                <td>{doc.owner}</td>
                <td>{this.renderStatus(doc.id, doc.status)}</td>
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
