import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { githubGET,githubREPO } from '../../../API-Get/githubGET';
import "./Repositories.css"



function Repositories() {
  const repos = githubREPO('harshit-lohani',0) 
  githubREPO('harshit-lohani',0) 
  githubREPO('harshit-lohani',1) 
  githubREPO('harshit-lohani',2) 
  return (
    <React.Fragment>
    <div className='repo-wrapper'>
        <div id='git-repo-number' className='git-repo-title'>Repositories</div>
        <div className='repo'>
          <div className='repo-name' id='repo-0-name'></div>
          <div className='repo-desc' id='repo-0-desc'></div>
          <div className='repo-lang-container'>
            <div className='repo-lang' id='repo-0-lang'></div>
          </div>
        </div>
        <div className='repo'>
          <div className='repo-name' id='repo-1-name'></div>
          <div className='repo-desc' id='repo-1-desc'></div>
          <div className='repo-lang-container'>
            <div className='repo-lang' id='repo-1-lang'></div>
          </div>
        </div>
        <div className='repo'>
          <div className='repo-name' id='repo-2-name'></div>
          <div className='repo-desc' id='repo-2-desc'></div>
          <div className='repo-lang-container'>
            <div className='repo-lang' id='repo-2-lang'></div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Repositories;