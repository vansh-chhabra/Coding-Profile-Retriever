import React from 'react'
import UserInfo from '../UserInfo/UserInfo';
import './ConnectedApps.css'

function ConnectedApps() {
  return (
    <React.Fragment>
      <div className='connected-app-wrapper'>
        <UserInfo />
        <UserInfo />
      </div>
    </React.Fragment>
    );
}

export default ConnectedApps