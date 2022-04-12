import React from 'react'
import {githubGET,githubREPO} from '../../API-Get/githubGET'
import './GitStats.css'

function GitStats() {
  githubGET() ;
  return (
    <React.Fragment>
      <div className='gitstat-wrapper'>
        <div className='gitstat-container'>
          <div className='gitstat-img-container'>
          <img src="https://img.icons8.com/ios/50/4a90e2/user-male-circle.png"/>
          </div>
          <div className='gitstat-data-container'>
            <div id='git-followers' className='gitstat-data-value'></div>
            <div id='git-followers-text'className='gitstat-data-label'>Followers</div>
          </div>
        </div>
        <div className='gitstat-container'>
          <div className='gitstat-img-container'>
          <img src="https://img.icons8.com/ios/50/4a90e2/trust--v1.png"/>
          </div>
          <div className='gitstat-data-container'>
            <div id='git-following' className='gitstat-data-value'></div>
            <div id='git-following-text' className='gitstat-data-label'>Following</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GitStats