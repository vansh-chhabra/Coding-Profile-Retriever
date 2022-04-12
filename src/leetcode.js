const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function leetcode(handle) {
    let url = 'https://competitive-coding-api.herokuapp.com/api/leetcode/';
    url = url.concat(handle);
    let obj = null;
    
    try {
        obj = await (await fetch(url)).json();
      } catch(e) {
          console.log('error');
      }
    
    // console.log(obj);
    return obj;
  }
 
export default leetcode;

