import React,{useState} from 'react'
import {Navigate, useLocation, useNavigate, useResolvedPath} from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm';
import leetcode from '../leetcode'
import interviewbit from '../interviewbit'
import codeforces from '../codeforces'
import github from '../github'
import DashNav from '../components/DashNav';
import NavBar from '../components/NavBar';
import GitPage from './GitPage';
import CFPage from './CFPage';
import LeetPage from './LeetPage';
import OverViewPage from './OverViewPage';
import Layout from './Layout'

function Dashboard({authorised}) {
  var user = JSON.parse(localStorage.getItem('userInfo'));
  var details = JSON.parse(localStorage.getItem('userDetails'));
  const [index,setIndex] = useState(0);
  
  if(!authorised){
    return <Navigate to='/'/>
  }
  if(details.isNewUser){
    return (
      <InputForm/>
    )
  }
  return (
    <React.Fragment>
      <NavBar/>
      <DashNav setIndex={setIndex} />
      {index==0?<OverViewPage />:null}
      {index==1?<GitPage />:null}
      {index==2?<CFPage />:null}
      {index==3?<LeetPage />:null}
    </React.Fragment>
  )
}

export default Dashboard