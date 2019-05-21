import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Heading } from 'components/common'
import { fetchDocument } from '../reducer'

import ListDoc from '../components/ListDocument'
class DocContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowUpload: false
    }
  }

  componentWillMount () {
    this.props.fetchDocument()
  }
  render () {
    return (
      <div>
        <Heading text={document} />
        <p>Here’s what you need to know before getting started with the Navbar:</p>
        <ListDoc
          documents={this.props.documents}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.doc.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDocument: (params) => dispatch(fetchDocument(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer)
