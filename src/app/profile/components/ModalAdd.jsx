import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import UploadFile from 'components/form/UploadFile'
import Input from 'components/form/Input'
import Select from 'components/form/Select'
import TextArea from 'components/form/TextArea'

export default class ModalAdd extends Component {
  constructor (props) {
    super(props)

    this.state = {
      document: {
        name: '',
        category: 1,
        file_content: '',
        size: 0,
        description: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.infoFileUpload = this.infoFileUpload.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  infoFileUpload (result) {
    this.setState(
      prevState => ({
        document: {
          ...prevState.document,
          name: result.name,
          file_content: result.base64,
          size: result.size
        }
      })
    )
  }

  handleInput (e) {
    let value = e.target.value
    let name = e.target.name
    this.setState(
      prevState => ({
        document: {
          ...prevState.document,
          [name]: value
        }
      })
    )
  }
  handleFormSubmit (e) {
    e.preventDefault()
    const doc = this.state.document
    const cb = (res) => {
      this.handleClose()
    }
    this.props.crateDocument(doc, cb)
  }

  handleClose () {
    this.props.handleClose()
    this.setState({
      document: {
        name: '',
        category: 1,
        file_content: '',
        size: 0,
        description: ''
      }
    })
  }

  render () {
    return (
      <Modal
        show={this.props.isShowModal}
        onHide={this.handleClose}
      >
        <form onSubmit={this.handleFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Create document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UploadFile getInfo={this.infoFileUpload} isRequired />
            <Input
              type={'text'}
              title={'Document Name'}
              name={'name'}
              value={this.state.document.name}
              placeholder={'Enter name'}
              handleChange={this.handleInput}
            />
            <Select
              title={'Category'}
              name={'category'}
              options={this.props.categories}
              value={this.state.document.category}
              placeholder={'Select category'}
              handleChange={this.handleInput}
            />
            <TextArea
              title={'Description'}
              rows={4}
              value={this.state.document.description}
              name={'description'}
              handleChange={this.handleInput}
              placeholder={'Enter some thing description for document'}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={this.handleClose}
            >
              Close
            </Button>
            <Button
              variant='primary'
              onClick={this.handleFormSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    )
  }
}
