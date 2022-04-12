import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { ToggleSlider }  from "react-toggle-slider";
import './TotalContri.css'
import { gitCONTRI } from '../../API-Get/githubGET';


function TotalContri() {
  const [active, setActive] = useState(false);

  gitCONTRI('harshit-lohani');

    
  return (
    <React.Fragment>
    <div className='total-contri-wrapper'>
        <div className='total-contri-number'><span id='git-contri'></span></div>
        <div className='total-contri-text'>Total Contribution</div>
        <hr className='divider'/>
        <div className='slider-flex-container'>
          <p>This Month</p>
          <ToggleSlider onToggle={state => setActive(state)}/>
          {/* Slider is {active ? "active" : "inactive"} */}
          <p>All time</p>
          </div>
    </div>
    </React.Fragment>
  )
}

export default TotalContri;