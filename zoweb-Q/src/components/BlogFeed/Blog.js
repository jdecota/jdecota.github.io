import React, { Component } from 'react'
import './styles.less'

export class Blog extends Component {
  render() {
    const { onDoubleClick, onClick, className, blog } = this.props;
    return (
      <div className={`blog ${className}`} onDoubleClick={onDoubleClick} onClick={onClick}>
        <div className="blog-hero">
          <img alt="blog-img" src="https://loremflickr.com/320/240" />
        </div>
        <div className="blog-brief">
          <h2>{blog.title}</h2>
          <p>TAXES</p>
          <span>1/13/2019</span>
        </div>
      </div>
    )
  }
}

export default Blog
