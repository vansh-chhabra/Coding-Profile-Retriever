import github from "../github";
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var gh_handle = 'harshit-lohani';

var repos;

async function github_contributions(gh_handle){
  var url = 'https://json-contributions.vercel.app/api/user?username=';
  url += gh_handle;

  let con = null;
    
    console.log(url);
    
    try {
      con = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }

  return con;

}

async function repo_lang(url){
  let obj = null;
    
    console.log(url);
    
    try {
      obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
  return obj;
}


function gitCONTRI(gh_handle){

  let obj = github_contributions(gh_handle);
  let promise1 = Promise.resolve(obj);

  promise1.then(function(val1) {

    document.getElementById('git-contri').textContent = val1.max;

    });

  
  
}

function githubGET(){

    //getting user info

    let obj1 = github(gh_handle, '');

    var promise1 = Promise.resolve(obj1);

    promise1.then(function(val1) {

      console.log(val1);
        document.getElementById('git-followers').textContent = val1.followers;
        document.getElementById('git-following').textContent = val1.following;
  
      });

    //getting repo and their tech stacks

    

}

function githubREPO(gh_handle, repo_no){
  let obj2 = github(gh_handle, '/repos');
  var promise2 = Promise.resolve(obj2);
  

    promise2.then(function(val2) {

      var repos = 0 ;
      console.log(val2);

      for(var r of val2){
        repos++;
      }
      
      var id1 = 'repo-' + repo_no + '-name';
      var id2 = 'repo-' + repo_no + '-lang';
      var id3 = 'repo-' + repo_no + '-desc';

      document.getElementById('git-repo-number').textContent = repos + " Repositories" ;
      console.log(repos);
  
      if(repo_no < repos){
        //this repo exits
        let vv = "" + repo_no;
        console.log(val2[vv]['name']);
        

        let repo_url = val2[vv]['url'];

        let lango = repo_lang(repo_url);

        // console.log(lango);

        var promise3 = Promise.resolve(lango);

        promise3.then(function(val3) {

          console.log(val3);

          console.log(val3.language);

          if(val3.description!=null)
          document.getElementById(id3).textContent = val3.description;
          else 
          document.getElementById(id3).textContent = "No Description Available";

          document.getElementById(id2).textContent = val3.language;
      
          });
         
          document.getElementById(id1).textContent = val2[vv]['name'];


      }
      else {
        console.log("repo does not exists");
      }
  
      });
      return repos ;
}

export {githubGET,githubREPO, gitCONTRI}