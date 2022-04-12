import React from 'react'
import './Rating.css'
import codeforcesRAT from '../../API-Get/codeforcesGET'
import leetcodeGET from '../../API-Get/leetcodeGET'
import interviewbitGET from '../../API-Get/leetcodeGET'

function Rating() {
    codeforcesRAT('amroth');
    // leetcodeGET('ishangarg09');
  return (
    <div className='rating-wrapper'>
        <div className='rating-header'>
            Codeforces
        </div>
        <div className='rating-container'>
            <div className='rating-label'>Rating</div>
            <div className='rating-value'><span id='cf-rating'></span></div>
        </div>
        <div className='rating-container'>
            <div className='rating-label'>Rank</div>
            <div className='rating-value'><span id='cf-rank'></span></div>
        </div>
        {/* <div className='rating-container'>
            <div className='rating-label'>Leetcode Rank</div>
            <div className='rating-value'><span id='lc-rank'></span></div>
        </div> */}

    
        
    </div>
  )
}

export default Rating