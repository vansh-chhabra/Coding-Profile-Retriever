const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function interviewbit(handle) {


    let url = 'https://competitive-coding-api.herokuapp.com/api/interviewbit/';
    url = url.concat(handle);
    let obj = null;
    
    
    try {
      obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
    return obj;
  }
 
export default interviewbit;

