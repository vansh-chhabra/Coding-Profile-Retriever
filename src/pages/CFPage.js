import React from 'react'
import CFContestHistory from '../components/Codeforces/CFContestHistory'
import CFStats from '../components/Codeforces/CFStats'

function CFPage() {
  return (
    <React.Fragment>
      <div className='display-flex-column'>
        <CFStats />
        <CFContestHistory />
      </div>
    </React.Fragment>
  )
}

export default CFPage