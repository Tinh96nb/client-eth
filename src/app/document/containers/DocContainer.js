import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Heading } from 'components/common'

class DocContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowUpload: false
    }
  }
  render () {
    return (
      <div>
        <Heading text={document} />
        <p>Here’s what you need to know before getting started with the Navbar:</p>
        <Card>
          <Card.Header as='h5'>
            List Document
            <Button
              onClick={() => this.setState({ isShowUpload: true })}
              bsPrefix='btn btn-primary float-right'
            >
                  Upload file
            </Button>
          </Card.Header>
          <Card.Body>
            {/* <ListDoc
                documents={documents}
                getDocByIndex={this.props.getDocByIndex}
              /> */}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { documents } = state.doc
  return {
    documents
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer)
