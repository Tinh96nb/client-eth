import React from 'react'

import { Link } from 'react-router-dom'

export default class RightSideBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeKey: null
    }
  }

  render () {
    return (
      <div className='d-none d-xl-block col-xl-2 right-sidebar'>
        <ul className='list-unstyled'>
          <li level='2' className=' Toc-ListItem-module--list-item--3CS5U'>
            <a href='#basic-example'>Basic Example</a>
            <ul className='list-unstyled'><li level='3'
              className=' Toc-ListItem-module--list-item--3CS5U'>
              <a href='#active-items'>Active items</a><ul className='list-unstyled' />
            </li>
            </ul>
          </li>
        </ul></div>
    )
  }
}
