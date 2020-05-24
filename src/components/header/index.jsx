import React from 'react'
import BigCard from './header-big-card/header-big-card'

export default function Header (props) {
  const { articles } = props

  return (
    <div className="row">
      <div className="col-12 md-4">
        <BigCard
          articles={articles[0]}
        />
      </div>
      <div className="col-12 md-4">
        <HeaderMiddleList
          articles={articles.slice(1, 4)}
        />
      </div>
      <div className="col-12 md-4">
        <BigCard
          articles={articles[4]}
        />
      </div>
    </div>
  )

}