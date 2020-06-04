import React from 'react'
import Icon from '@mdi/react'
import {
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiBookmark,
  mdiDotsHorizontal
} from '@mdi/js'

export default function IconsSocialMedia (props) {
  return (
    <div className="row">
      <div className="col-2">
        <Icon path={mdiTwitter}
          title="facebook"
          size={1}
        />
      </div>
      <div className="col-2">
        <Icon path={mdiLinkedin}
          title="facebook"
          size={1}
        />
      </div>
      <div className="col-2">
        <Icon path={mdiFacebook}
          title="facebook"
          size={1}
        />
      </div>
      <div className="col-2">
        <Icon path={mdiBookmark}
          title="facebook"
          size={1}
        />
      </div>
      <div className="col-2">
        <Icon path={mdiDotsHorizontal}
          title="facebook"
          size={1}
        />
      </div>
    </div>
  )
}