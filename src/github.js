const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function github(handle, addon) {


    let url = 'https://api.github.com/users/';
    url = url.concat(handle);
    url = url.concat(addon);
    let obj = null;
    
    console.log(url);
    
    try {
      obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
    return obj;
  }
 
export default github;