import React from 'react'
import TotalContri from './TotalContri'
import GitStats from './GitStats'
import Repositories from './Repositories/Repositories'
import './GitModule.css'
import Rating from '../Overview/Rating'

function GitModule() {
  return (
    <React.Fragment>
      <div className='gitmodule-wrapper'>
        <TotalContri />
        <GitStats/>
        <Repositories />
        <Rating />
      </div>
    </React.Fragment>
  )
}

export default GitModule