import Friend from './Friend'
import "./Friends.css"
import React, { useState,useEffect } from 'react'
import {auth,provider, db} from "../../Firebase"
import {doc,getDoc,updateDoc} from "firebase/firestore"


const Friends=()=> {
  const [friendsData,setFriendsData] = useState([]) ;
  const [friendList,setFriendList] = useState([]) ; 
  
  


  useEffect(() => {
    const getFriendsList=async ()=>{
      var details = JSON.parse(localStorage.getItem('userDetails'));
      const DocRef = doc(db, "users", `${details.profile.id}`);
      var friendlist= await getDoc(DocRef);
      setFriendList(friendlist._document.data.value.mapValue.fields.friends.arrayValue.values);
        console.log(friendlist._document.data.value.mapValue.fields.friends.arrayValue.values);
      //friendList.map((friend) =>{
      //     console.log(friend.stringValue);
      //     try {
      //       const friendRef = doc(db, "users", `${friend.stringValue}`);
      //   getDoc(friendRef)
      //     .then(response1 =>{setFriendsData([...friendsData,response1._document.data.value.mapValue.fields]);
      //   console.log(response1)});
      //     } catch (error) {
      //       console.log(error)
      //     }
         
         
        }
        
         
         

    
    getFriendsList();
    
  },[]);

  
  
 
  
  
  

  return (
    <div className='friend-container'>
        <div className='friend-header'>
          Friends ({friendList.length})
        </div>
        <div className="friend-list">
          <Friend props={friendList}/>
        </div>
    </div>
  )
}

export default Friends