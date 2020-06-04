import React from 'react'
import CardBody from '../../../../components/body/card-body/card-body-medium'

// Css
import './CardList.css';

export default function CardList(props) {
  const { articles } = props
  return (

    <div className="row">
      {
        articles.map((article, index) => {
          <div className="col-6" key={index}>
            <CardBody article={article} />
          </div>
        })
      }
    </div>
  )
}