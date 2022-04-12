import React, { useEffect, useState } from 'react'
import  "./Friend.css"
import {auth,provider, db} from "../../Firebase"
import {doc,getDoc,updateDoc} from "firebase/firestore"

function Friend(props) {
  let friends1=[];
  const [friends,setFriends] =useState([]);
  const [loading,setLoading] =useState(false);
  
  var k=props.props;
  
 // console.log(k[0]["stringValue"]);
   useEffect(()=>{
      setFriends(props.props);
      console.log(friends.length)
      if(friends.length==3){
        setLoading(true)
      }
   },[props,friends]);
  
  return (<div>
    {!loading ? <div></div>
    :
    <React.Fragment>
      <div className="friend_card">
      <div className="img-holder">
        <img className="profile_photo" src = "https://unsplash.com/photos/5E5N49RWtbA" /> 
      </div>
      <div className='flex-space-between'>
        <div className="basic-info">
          <p className ="friend_name_holder">
            <span className='friend_name'>Harshit Lohani</span>
            <span className='friend_tag'>{friends[0].stringValue}</span>
          </p>
          <p className='friend_title'>UI/UX and Ideation</p>
        </div>
        <div className="remove-button">
          <button className='button'>
            Remove
          </button>
        </div>
      </div>
    </div>
    <div className="friend_card">
      <div className="img-holder">
        <img className="profile_photo" src = "https://unsplash.com/photos/5E5N49RWtbA" /> 
      </div>
      <div className='flex-space-between'>
        <div className="basic-info">
          <p className ="friend_name_holder">
            <span className='friend_name'>Anuj Gore</span>
            <span className='friend_tag'>{friends[1].stringValue}</span>
          </p>
          <p className='friend_title'>FrontEnd Dev at Chocofrappe</p>
        </div>
        <div className="remove-button">
          <button className='button'>
            Remove
          </button>
        </div>
      </div>
    </div>
    <div className="friend_card">
      <div className="img-holder">
        <img className="profile_photo" src = "https://unsplash.com/photos/5E5N49RWtbA" /> 
      </div>
      <div className='flex-space-between'>
        <div className="basic-info">
          <p className ="friend_name_holder">
            <span className='friend_name'>Harshal A</span>
            <span className='friend_tag'>{friends[2].stringValue}</span>
          </p>
          <p className='friend_title'>Backend Dev at ChocoFrappe</p>
        </div>
        <div className="remove-button">
          <button className='button'>
            Remove
          </button>
        </div>
      </div>
    </div>
    </React.Fragment>
}
    </div>
  )
}

export default Friend