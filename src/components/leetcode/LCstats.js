import React from 'react'
import leetcodeGET from '../../API-Get/leetcodeGET';
import '../Codeforces/CFStats.css'

function LCstats(){
    leetcodeGET('ishangarg09')
    return (
        <React.Fragment>
            <div className='cf-stats-wrapper'>
                <table className='cf-stats-table'>
                    
                <tr>
                    <td >Rank:</td>
                    <td className='cf-stats-data' id='lc-rank'></td>
                </tr>    
                <tr>
                    <td >Acceptance Rate:</td>
                    <td className='cf-stats-data' id='lc-acc-rate'></td>
                </tr>    
                <tr>
                    <td >Reputation:</td>
                    <td className='cf-stats-data' id='lc-reputation'></td>
                </tr>    
                <tr>
                    <td >Easy Submitted</td>
                    <td className='cf-stats-data' id='lc-easy'></td>
                </tr>    
                <tr>
                    <td >Medium Submitted</td>
                    <td className='cf-stats-data' id='lc-medium'></td>
                </tr>    
                <tr>
                    <td >Hard Submitted</td>
                    <td className='cf-stats-data' id='lc-hard'></td>
                </tr>    
                <tr>
                    <td >Easy Acceoptance Rate</td>
                    <td className='cf-stats-data' id='lc-easy-acc'></td>
                </tr>
                <tr>
                    <td >Medium Acceoptance Rate</td>
                    <td className='cf-stats-data' id='lc-medium-acc'></td>
                </tr>
                <tr>
                    <td >Hard Acceoptance Rate</td>
                    <td className='cf-stats-data' id='lc-hard-acc'></td>
                </tr>
                </table>
            </div>

        </React.Fragment>


    )

}

export default LCstats;