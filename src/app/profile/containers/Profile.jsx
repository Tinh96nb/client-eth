import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Heading } from 'components/common'
import {
  fetchDocument,
  crateDocument,
  deleteDocument,
  updateDocument
} from '../reducer'
import { Button } from 'react-bootstrap'

import ModalAdd from '../components/ModalAdd'
import ModalEdit from '../components/ModalEdit'
import ListDoc from '../components/ListDocument'

class DocContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowModalAdd: false,
      isShowModalUpdate: false,
      docSelecting: null
    }
  }

  componentWillMount () {
    this.props.fetchDocument({ owner: this.props.me.address })
  }
  render () {
    return (
      <div>
        <Heading text={document} />
        <Button
          variant='primary'
          onClick={() => this.setState({ isShowModalAdd: true })}
        >
          Create
        </Button>
        <p>Profile list documents</p>

        <ListDoc
          documents={this.props.documents}
          deleteDocument={this.props.deleteDocument}
          handleSelectDoc={(doc) =>
            this.setState({ docSelecting: doc, isShowModalEdit: true })
          }
        />
        <ModalAdd
          isShowModal={this.state.isShowModalAdd}
          crateDocument={this.props.crateDocument}
          categories={this.props.categories}
          handleClose={() => this.setState({ isShowModalAdd: false })}
        />
        <ModalEdit
          isShowModal={this.state.isShowModalEdit}
          document={this.state.docSelecting}
          categories={this.props.categories}
          updateDocument={this.props.updateDocument}
          handleClose={() => this.setState({ isShowModalEdit: false })}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.profile.documents,
    categories: state.app.categories,
    me: state.app.me
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDocument: (params) => dispatch(fetchDocument(params)),
    crateDocument: (params, cb) => dispatch(crateDocument(params, cb)),
    deleteDocument: (params, cb) => dispatch(deleteDocument(params, cb)),
    updateDocument: (params, cb) => dispatch(updateDocument(params, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer)
