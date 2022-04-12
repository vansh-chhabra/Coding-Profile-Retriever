import React from 'react'
import "./UserBox.css"

function UserBox() {

    var details = JSON.parse(localStorage.getItem('userDetails'));
    console.log(details);
  return (
    <div className='userbox-main'>
        <div className='userbox-flex-container'>
            <div className='userbox-img-holder'>
                <img src={details.profile.picture}></img>
            </div>
            <div className='info-holder'>
                <div className='username-holder'>
                    <div className='username'>
                        {details.profile.name}
                    </div>
                    <div className='usertag'>
                        {details.profile.email}
                    </div>
                </div>
                <div className='score-holder'>
                    <div className='score'>
                        2568
                    </div>
                    <div className='score-label'>
                        Profile Points
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className='userbox-data-container'>
            <div className='userbox-field'>
                <div className='userbox-field-container'>
                    <div className='userbox-field-label'>
                            T-Shirt Size
                    </div>
                    <div className='userbox-field-data'>
                            Not Available
                    </div>
                </div>
                <div className='userbox-field-btn'>
                    Add
                </div>
            </div>
            <div className='userbox-field'>
                <div className='userbox-field-container'>
                    <div className='userbox-field-label'>
                            Address
                    </div>
                    <div className='userbox-field-data'>
                            VK 159, BITS Pilani, Pilani, Rajasthan  333031
                    </div>
                </div>
                <div className='userbox-field-btn'>
                    Edit
                </div>
            </div>
            <div className='userbox-field'>
                <div className='userbox-field-container'>
                    <div className='userbox-field-label'>
                            Phone
                    </div>
                    <div className='userbox-field-data'>
                            +91 8511199717
                    </div>
                </div>
                <div className='userbox-field-btn'>
                    Add
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserBox