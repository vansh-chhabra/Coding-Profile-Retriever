import React,{useState} from 'react'
import {Link} from "react-router-dom"
import NavBar from '../components/NavBar'
import DashNav from '../components/DashNav'
import GitPage from './GitPage'
import OverViewPage from './OverViewPage'
import CFPage from './CFPage'
import LeetPage from './LeetPage'

function Layout() {
  const [index,setIndex] = useState(0)
  return (
    <React.Fragment>
    <NavBar/>
      <DashNav setIndex={setIndex} />
      {index==1?<GitPage />:null}
      {index==2?<LeetPage />:null}
      {index==0?<OverViewPage />:null}
      {index==3?<CFPage />:null}

    </React.Fragment>
  )

}

export default Layout