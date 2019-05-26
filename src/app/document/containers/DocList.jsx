import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Heading } from 'components/common'
import {
  fetchDocument,
  crateDocument
} from '../reducer'
import { Button } from 'react-bootstrap'
import ModalAdd from '../components/ModalAdd'
import ListDoc from '../components/ListDocument'

class DocContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowModalAdd: false
    }
  }

  componentWillMount () {
    this.props.fetchDocument()
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
        <p>Here’s what you need to know before getting started with the Navbar:</p>

        <ListDoc
          documents={this.props.documents}
          deleteDocument={this.props.deleteDocument}
        />

        <ModalAdd
          isShowModal={this.state.isShowModalAdd}
          crateDocument={this.props.crateDocument}
          categories={this.props.categories}
          handleClose={() => this.setState({ isShowModalAdd: false })}

        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.doc.list,
    categories: state.app.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDocument: (params) => dispatch(fetchDocument(params)),
    crateDocument: (params, cb) => dispatch(crateDocument(params, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer)
