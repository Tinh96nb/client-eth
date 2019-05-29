import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchDocument,
  crateDocument
} from '../reducer'
import { Button, Card } from 'react-bootstrap'
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
        <Card border='light'>
          <Card.Header>
            <h5 className='pull-left'>List Document</h5>
            <Button
              className='pull-right'
              variant='primary'
              size='sm'
              onClick={() => this.setState({ isShowModalAdd: true })}
            >
              <i className='fa fa-cloud-upload' aria-hidden='true' /> New
            </Button>
          </Card.Header>
        </Card>
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
    categories: state.admin.categories
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
