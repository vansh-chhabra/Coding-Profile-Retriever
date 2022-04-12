import leetcode from "../leetcode";

// var lc_handle = 'ishangarg09';

function leetcodeGET(lc_handle) {

    let obj = leetcode(lc_handle);

    var promise = Promise.resolve(obj);

    promise.then(function(val1) {

      console.log(val1);

      document.getElementById('lc-rank').textContent = val1.ranking;
      document.getElementById('lc-acc-rate').textContent = val1.acceptance_rate;
      document.getElementById('lc-reputation').textContent = val1.reputation;
      document.getElementById('lc-easy').textContent = val1.easy_problems_submitted;
      document.getElementById('lc-medium').textContent = val1.medium_problems_submitted;
      document.getElementById('lc-hard').textContent = val1.hard_problems_submitted;
      document.getElementById('lc-easy-acc').textContent = val1.easy_acceptance_rate;
      document.getElementById('lc-hard-acc').textContent = val1.hard_acceptance_rate;
      document.getElementById('lc-medium-acc').textContent = val1.medium_acceptance_rate;


        
      });


}

export default leetcodeGET;