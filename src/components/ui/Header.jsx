import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import * as session from 'common/helpers/session'
export default class Header extends Component {
  handleLogout () {
    session.remove()
    window.location.href = '/auth'
  }

  render () {
    const { profile, loading } = this.props

    return (
      <Navbar bg='dark' variant='dark' className='header'>
        <a href='/' className='navbar-brand'>
          Doc Manager
        </a>
        <Nav className='mr-auto' />
        {loading !== 0 ? (<div className='spinner-border text-primary' />) : ''}
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='ml-auto pr-md-5 navbar-nav'>

            Signed in as: <a href='/profile'>{profile.address}</a>
            <Button
              variant='outline-primary'
              size='sm'
              onClick={this.handleLogout}
            >
              <i className='fa fa-sign-out' aria-hidden='true' />
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
