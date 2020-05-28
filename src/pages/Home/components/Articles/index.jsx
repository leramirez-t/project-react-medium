import React from 'react';
import Article from '../../../../components/body/article';

export default function Articles ({ title, description, estimatedReadTime, date, id }) {
  return (
    <div>
      <Article
        id={id}
        title={title}
        description={description}

        publicationDate={date}
        readTime={estimatedReadTime}

      />
    </div>
  )
}