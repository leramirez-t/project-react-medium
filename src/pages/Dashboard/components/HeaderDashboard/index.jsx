import React from 'react'

// CSS
import './HeaderDashboard.css'

// Logo
/*import monoGram from './assets/monogram/Monogram.png'
import wordMark from './assets/wordmark/Wordmark_Black.png'*/
import redpoint from './assets/monogram/rp-logo.png'

export default function HeaderDashboard(){
  return(
    <div class="row d-flex justify-content-around align-items-center px-3 mx-3">
      <div class="col-6 py-2">
        <div>  
        <a href="/"><img className="redpoint" src={redpoint} alt="RedPoint" height="40"/></a>
        
    {/* <a href="/"><img className="monoGram" src={monoGram} alt="Medium" height="35"/></a>
        <a href="/"><img className="wordMark" src={wordMark} alt="Medium" height="22"/></a>  ESTA ES LA VERSION ORIGINAL DEL PROYECTO MEDIUM  */}
        
        </div>
      </div>
      <div class="col-6 py-2 d-flex justify-content-end align-items-center">
        <span class="pr-2">
          <a id="search" href="/" title="Search" aria-label="Search">
            <span>
              <span>
                <svg width="25" height="25">
                  <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
                 </svg>
              </span>
            </span>
          </a>
        </span>
        <input type="text" id="searchBox" placeholder="Search"/>
        <span class="pr-2">
          <a id="bookmarks" href="/" title="Bookmarks" aria-label="Bookmarks">
            <span>
              <span>
                <svg width="25" height="25">
                  <path d="M16 6c1.1 0 2 .9 2 2v13.661h-.012a.5.5 0 0 1-.118.285.508.508 0 0 1-.708.03L11.5 17.85l-5.662 4.125a.5.5 0 0 1-.706-.03.478.478 0 0 1-.12-.285H5V8c0-1.1.9-2 2-2h9zM6 8v12.636l5.162-3.667a.49.49 0 0 1 .676 0L17 20.637V8c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"></path>
                  <path d="M21 5v13.661h-.012a.5.5 0 0 1-.118.285.508.508 0 0 1-.708.03L20 18.858V5c0-.55-.45-1-1-1h-9c-.55 0-1 .45-1 1H8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2z"></path>
                </svg>
              </span>
            </span>
          </a>
        </span>
        <span class="pr-2">
          <a href="/" id="notifications" class="btn p-0" title="Notifications" aria-label="Notifications">
            <span>
              <svg width="25" height="25" viewBox="-293 409 25 25">
                <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
              </svg>
            </span>
          </a>
        </span>
        <span class="pr-2">
            <a data-toggle="/" data-target="#exampleModalCenter" id="newPost" class="border rounded border-dark p-2 text-dark" href="/newpost">New Post</a>
          {/*<a data-toggle="/" data-target="#exampleModalCenter" id="newPost" class="border rounded border-dark p-2 text-dark" href="/newpost">New Post</a>*/}
        </span>
        <span>
          <a href="/" id="avatar" class="btn p-0 " aria-haspopup="true" data-action="open-userActions">
            <div>
              <img src="https://cdn-images-1.medium.com/fit/c/64/64/0*avmNBHlEbxKLvGpp" alt="Ivan Pedraza" height="32" width="32" class="rounded-circle"/>
            </div>
          </a>
        </span>
      </div>
    </div>
  )
}