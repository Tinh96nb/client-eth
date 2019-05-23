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
    const { categories = [] } = this.props
    return (
      <div className='d-none d-xl-block col-xl-2 right-sidebar'>
        <ul className='list-unstyled'>
          <li level='2'>
            <a href='#'>List Category</a>
            <ul className='list-unstyled'>
              {categories.map(cate => {
                return (
                  <li level='3' key={cate.id}>
                    <Link to={`/document?category=${cate.name}`}>
                      {cate.name} ({cate.num_doc})
                    </Link>
                  </li>)
              })}
            </ul>
          </li>
        </ul></div>
    )
  }
}
