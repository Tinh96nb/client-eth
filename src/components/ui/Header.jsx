import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Header extends Component {
  render () {
    return (
      <Navbar bg='dark' variant='dark' className='header'>
        <a href='' className='navbar-brand'>Doc Manager</a>
        <Nav className='mr-auto' />
      </Navbar>
    )
  }
}
