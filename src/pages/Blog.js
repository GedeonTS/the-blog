import React from 'react'
import Menu from '../components/Menu'

function Blog() {
  return (
    <div className="header-main">
        <div className="header-main-inner">
          <ul>
            <li>Ushindi's Blog</li>
            <li>
              <Menu />
            </li>
          </ul>
          <div className="header-main-inner-title">
            <h1>Welcome to my blog</h1>
            <p>
              Here you will find all the latest news and updates from the world of tech
            </p>
          </div>
        </div>
      </div>
  )
}

export default Blog
