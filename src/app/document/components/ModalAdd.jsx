import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import UploadFile from 'components/form/UploadFile'
import Input from 'components/form/Input'
import Select from 'components/form/Select'

export default class ModalAdd extends Component {
  constructor (props) {
    super(props)

    this.state = {
      document: {
        name: '',
        category: '',
        file_content: ''
      },

      categories: [{ id: 1, name: 'Male' }]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.infoFileUpload = this.infoFileUpload.bind(this)
  }

  infoFileUpload (result) {
    this.setState(
      prevState => ({
        document: {
          ...prevState.document,
          name: result.name,
          file_content: result.base64
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
    console.log(doc)
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          inputType={'text'}
          title={'Full Name'}
          name={'name'}
          value={this.state.document.name}
          placeholder={'Enter your name'}
          handleChange={this.handleInput}
        />{' '}
        <Select
          title={'Category'}
          name={'category'}
          options={this.state.categories}
          value={this.state.document.category}
          placeholder={'Select Categpry'}
          handleChange={this.handleInput}
        />{' '}
        <UploadFile getInfo={this.infoFileUpload} />
        <Button variant='primary' type='submit'>
        Submit
        </Button>
        <Button variant='primary' type='clear'>
        Clear
        </Button>
      </form>
    )
  }
}
