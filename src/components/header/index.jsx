import React from 'react'
import BigCard from './header-big-card/header-big-card'
import HeaderMiddleList from './header-middle-card-list'

export default function Header (props) {
  const { articles } = props

  console.log('[articles]:', articles)

  return (
    <div className="row">
      <div className="col-4 md-4">
        <BigCard
          article={articles[0]}
        />
      </div>
      <div className="col-4 md-4">
        <HeaderMiddleList
          articles={articles.slice(1, 4)}
        />
      </div>
      <div className="col-4 md-4">
        <BigCard
          article={articles[4]}
        />
      </div>
    </div>
  )

}