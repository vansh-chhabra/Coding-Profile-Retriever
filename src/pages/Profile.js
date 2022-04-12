import React,{useState} from 'react'
import { Navbar } from 'react-bootstrap'
import {Link,Navigate} from "react-router-dom"
import DashNav from '../components/DashNav'
import Friends from '../components/Friends/Friends'
import Sidebar from '../components/Sidebar/Sidebar'
import NavBar from '../components/NavBar'
import UserInfo from '../components/UserInfo/UserInfo'
import './Profile.css'
import ConnectedApps from '../components/ConnectedApps/ConnectedApps'
import Goodies from '../components/shiprocket/goodies.js'

function Profile({authorised}) {


  const [page,setPage] = useState(0)
  if(!authorised){
    return <Navigate to='/'/>
  }
  return (
    <React.Fragment>
      <nav>
        <NavBar />
      </nav>
      <div className="profile-flex-container">
        <Sidebar setPage={setPage} />
        {/* <Friends /> */}
        {(page===0)?<UserInfo />:null}
        {(page===1)?<Friends />:null}
        {(page===2)?<Goodies />:null}

      </div>
    </React.Fragment>
  )
}

export default Profile