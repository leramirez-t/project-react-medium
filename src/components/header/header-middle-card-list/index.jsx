import React from 'react'
import HeaderSmallCard from '../header-small-card'

export default function HeaderMiddleList (props) {
  const { articles } = props

  return (
    <div className="row">
      {
        articles.map((article, index) => (
          <div className="col-12" key={index}>
            <HeaderSmallCard article={article} />
          </div>
        ))
      }
    </div>
  )
}