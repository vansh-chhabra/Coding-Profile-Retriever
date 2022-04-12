import React from 'react'
import codeforcesGET from '../../API-Get/codeforcesGET'
import './CFContestHistory.css'
import './CFStats.css'

function CFContestHistory() {
    codeforcesGET("amroth",0)
    codeforcesGET("amroth",1)
    codeforcesGET("amroth",2)
    codeforcesGET("amroth",3)
    codeforcesGET("amroth",4)
    return (
    <React.Fragment>
        <div className='cf-stats-wrapper'>
            <div className='cf-stats-title'>Past Contests</div>
            <hr className='cf-stats-divider'/>
            <div className='cf-stats-container'>
                <div className='cf-stats-sub-title' id='contest-0-name'>Loading...</div>
                <table className='cf-stats-table'>
                <tr>
                <td>Rank</td>
                <td className='cf-stats-data' id='contest-0-rank'>Loading...</td>
                </tr>
                <tr>
                <td >Rating</td>
                <td className='cf-stats-data'>
                    <span id='contest-0-new-rating'></span>(
                    <span id='contest-0-rating-change'></span>)
                    </td>
                </tr>
                </table>
            </div>

            <hr className='cf-stats-divider'/>

            <div className='cf-stats-container'>
                <div className='cf-stats-sub-title' id='contest-1-name'>Loading...</div>
                <table className='cf-stats-table'>
                <tr>
                <td>Rank</td>
                <td className='cf-stats-data' id='contest-1-rank'>Loading...</td>
                </tr>
                <tr>
                <td >Rating</td>
                <td className='cf-stats-data'>
                    <span id='contest-1-new-rating'></span>(
                    <span id='contest-1-rating-change'></span>)
                    </td>
                </tr>
                </table>
            </div>

            <hr className='cf-stats-divider'/>
            
            <div className='cf-stats-container'>
                <div className='cf-stats-sub-title' id='contest-2-name'>Loading...</div>
                <table className='cf-stats-table'>
                <tr>
                <td>Rank</td>
                <td className='cf-stats-data' id='contest-2-rank'>Loading...</td>
                </tr>
                <tr>
                <td >Rating</td>
                <td className='cf-stats-data'>
                    <span id='contest-2-new-rating'></span>(
                    <span id='contest-2-rating-change'></span>)
                    </td>
                </tr>
                </table>
            </div>

            <hr className='cf-stats-divider'/>

            <div className='cf-stats-container'>
                <div className='cf-stats-sub-title' id='contest-3-name'>Loading...</div>
                <table className='cf-stats-table'>
                <tr>
                <td>Rank</td>
                <td className='cf-stats-data' id='contest-3-rank'>Loading...</td>
                </tr>
                <tr>
                <td >Rating</td>
                <td className='cf-stats-data'>
                    <span id='contest-3-new-rating'></span>(
                    <span id='contest-3-rating-change'></span>)
                    </td>
                </tr>
                </table>
            </div>

            
            <hr className='cf-stats-divider'/>

            <div className='cf-stats-container'>
                <div className='cf-stats-sub-title' id='contest-4-name'>Loading...</div>
                <table className='cf-stats-table'>
                <tr>
                <td>Rank</td>
                <td className='cf-stats-data' id='contest-4-rank'>Loading...</td>
                </tr>
                <tr>
                <td >Rating</td>
                <td className='cf-stats-data'>
                    <span id='contest-4-new-rating'></span>(
                    <span id='contest-4-rating-change'></span>)
                    </td>
                </tr>
                </table>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CFContestHistory