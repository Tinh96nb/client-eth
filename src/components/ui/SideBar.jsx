import React from 'react'
import { Form, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { asideMenu } from 'common/helpers/const'

export default class Aside extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeKey: null
    }
  }

  render () {
    return (
      <div className='col-xl-2 col-md-3 col-12 d-flex flex-column sidebar'>
        <Form className='py-3 d-flex align-items-center'>
          <Form.Control placeholder='Search...' />
        </Form>
        <div className='listmenu'>
          <Nav className='nav-list pt-2 pb-4'>
            {asideMenu.map((item, i) => {
              return (
                <Link
                  key={i}
                  className='nav-link'
                  to={item.link}
                >
                  {item.name}</Link>
              )
            })}
          </Nav>
        </div>
      </div>
    )
  }
}
