import React from 'react'
import  "./Sidebar.css"
import SidebarTab from './SidebarTab'

function Sidebar({setPage}) {

  return (
    <React.Fragment>
      <div className='sidebar-main'>
        <div className='sidebar-main-section'>
          <SidebarTab onClick={()=>setPage(0)} name='Information'/>
          <SidebarTab onClick={()=>setPage(1)} name='Friends'/>
          {/* <SidebarTab onClick={()=>setPage(2)} name='Connected Apps'/> */}
          <SidebarTab onClick={()=>setPage(2)} name='Goodies'/>
        </div>
        <hr className='sidebar-divider'/>
        <hr className='sidebar-divider'/>
        <hr className='sidebar-divider'/>
      </div>
    </React.Fragment>
  )
}

export default Sidebar