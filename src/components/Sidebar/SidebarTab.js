import React from 'react'
import  "./SidebarTab.css"

function Sidebar(props) {
  const handleClick = (e) => {
    e.preventDefault(); 
    console.log('Click')
  }
  return (
    <React.Fragment>
      <div className='tab-main'>
        <div className='icon'>
          {/* <img src="#" alt=""></img> */}
        </div>
        <div className='tab-title'>
          <a onClick={props.onClick}>{props.name}</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar