import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Input from 'components/form/Input'

export default class ModalAdd extends Component {
  constructor (props) {
    super(props)

    this.state = {
      category: {
        name: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleInput (e) {
    let value = e.target.value
    let name = e.target.name
    this.setState(
      prevState => ({
        category: {
          ...prevState.category,
          [name]: value
        }
      })
    )
  }
  handleFormSubmit (e) {
    e.preventDefault()
    const category = this.state.category
    const cb = (res) => {
      this.handleClose()
    }
    this.props.createCategory(category, cb)
  }

  handleClose () {
    this.props.handleClose()
    this.setState({
      category: {
        name: ''
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
            <Modal.Title>Create category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              type={'text'}
              title={'Category Name'}
              name={'name'}
              value={this.state.category.name}
              placeholder={'Enter name'}
              handleChange={this.handleInput}
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
