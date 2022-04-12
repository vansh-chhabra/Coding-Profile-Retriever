import React from 'react'
import codeforcesGET from '../../API-Get/codeforcesGET'
import './CFStats.css'
//curr rating, max rating, rank, no. of contest, max rank, contest history
// contest name, rating change, new rating, rank 
function CFStats() {
    codeforcesGET("amroth",0)
  return (
    <React.Fragment>
        <div className="cf-stats-wrapper">
          <div className='cf-stats-title'>
            Basic Information
          </div>
          <hr className='cf-stats-divider'/>
          <table className='cf-stats-table'>
            <tr>
              <td >Rating:</td>
              <td className='cf-stats-data' id='cf-rating'></td>
            </tr>
            <tr>
              <td >Max Rating:</td>
              <td className='cf-stats-data' id='cf-max-rating'></td>
            </tr>
            <tr>
              <td >Rank:</td>
              <td className='cf-stats-data' id='cf-rank'></td>
            </tr>
            <tr>
              <td >Max Rank:</td>
              <td className='cf-stats-data' id='cf-max-rank'></td>
            </tr>
            <tr>
              <td >No of contests:</td>
              <td className='cf-stats-data' id='cf-no-of-contests'></td>
            </tr>
            
          </table>
        </div>
    </React.Fragment>
  )
}

export default CFStats