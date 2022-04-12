import codeforces from "../codeforces";

var cf_handle = 'amroth';

function codeforcesRAT(cf_handle){
  let obj = codeforces(cf_handle);
    var promise = Promise.resolve(obj);

    promise.then(function(val) {
      document.getElementById('cf-rating').textContent = val.rating;
      document.getElementById('cf-rank').textContent = val.rank;
    });

}

const data = [];

function codeforcesGET(cf_handle, contest_no) {

    



    let obj = codeforces(cf_handle);
    var promise = Promise.resolve(obj);

    promise.then(function(val) {

        var no = 0;

        for(var c of val.contests){
          no++;
          data.push(c['New Rating']);
        }

        
        document.getElementById('cf-rating').textContent = val.rating;
        document.getElementById('cf-rank').textContent = val.rank;
        document.getElementById('cf-max-rank').textContent = val['max rank'];
        document.getElementById('cf-max-rating').textContent = val['max rating'];
        document.getElementById('cf-no-of-contests').textContent = no;

        if(contest_no < no){
          
          var id1 = '' + contest_no;
          var id2 = 'contest-' + contest_no; 
          
          document.getElementById(id2 + '-name').textContent = contest_no+1 + ". " + val.contests[id1]['Contest']+" ";
          document.getElementById(id2 + '-rating-change').textContent = val.contests[id1]['Rating Change'];
          document.getElementById(id2 + '-new-rating').textContent = val.contests[id1]['New Rating'];
          document.getElementById(id2 + '-rank').textContent = val.contests[id1]['Rank']+" ";
        }
        else{
          console.log("Contest Not Given")
        }
        




    });

    console.log(data[0]);

}

export default codeforcesGET;
export { codeforcesRAT } ;