import React, { useState } from 'react'
import {auth,provider, db} from "../../Firebase"
import {doc,getDoc,updateDoc} from "firebase/firestore"
import './InputForm.css'

function InputForm({setFormSubmitted}) {
  const [username,setUserName] = useState("") ; 
  const [git_handle,setGitHandle] = useState("") ; 
  const [ib_handle,setIbHandle] = useState("") ; 
  const [leet_handle,setLeetHandle] = useState("") ; 
  
  const userChangeHandler = (event) => {
    console.log(event.target)
    setUserName(event.target.value)
  }
  const leetChangeHandler = (event) => {
    console.log(event.target)
    setLeetHandle(event.target.value)
  }
  const ibChangeHandler = (event) => {
    console.log(event.target)
    setIbHandle(event.target.value)
  }
  const gitChangeHandler = (event) => {
    console.log(event.target)
    setGitHandle(event.target.value)
  }

  const submitHandler = async event => {
      event.preventDefault() ;
      var details = JSON.parse(localStorage.getItem('userDetails'));
      const DocRef = doc(db, "users", `${details.profile.id}`);
      await updateDoc(DocRef, {
        "username": username,
        "github": git_handle,
        "leetcode": leet_handle,
        "interview": ib_handle
    });
    console.log("Updated profile")
    localStorage.setItem('userDetails',JSON.stringify({...details,username:username,github:git_handle,leetcode:leet_handle,interview:ib_handle}));
    setFormSubmitted(true) ;
    
  }

  return (
    <React.Fragment>
      <div class="flex-container">
        <div className='form-container'>
          <form onSubmit={submitHandler}>
              <h1 className='form-title'>Complete your profile</h1>
              <div className='form'>
              <div className='field'>
                  <label>Username</label>
                  <input type='text' name='username' placeholder='username' value={username} onChange={userChangeHandler}/>
              </div>
              <div className='field'>
                  <label>Github handle</label>
                  <input type='text' name='github-handle' placeholder='github-handle' value={git_handle} onChange={gitChangeHandler}/>
              </div>
              <div className='field'>
                  <label>Leetcode handle</label>
                  <input type='text' name='leet-handle' placeholder='leetcode-handle' value={leet_handle} onChange={leetChangeHandler}/>
              </div>
              <div className='field'>
                  <label>Interviewbit Handle</label>
                  <input type='text' name='ib-handle' placeholder='interviewbit-handle' value={ib_handle} onChange={ibChangeHandler}/>
              </div>
              <button className='form-button'>Submit</button>
              </div>
          </form>
        </div>
        <div className='img-container'>
          <img src="https://i.ibb.co/Z1ymcj6/undraw-Scooter-re-lrsb.png"></img>
        </div>
      </div>
    </React.Fragment>
  )
}

export default InputForm