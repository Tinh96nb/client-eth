import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'

class DocContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowUpload: false
    }
  }
  render () {
    return (
      <Row className='mt-4'>
        <Col md={12}>
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
        </Col>
      </Row>
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
