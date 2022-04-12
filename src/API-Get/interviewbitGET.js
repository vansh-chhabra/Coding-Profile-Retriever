import interviewbit from "../interviewbit";

var ib_handle = 'ishangarg';

function interviewbitGET(ib_handle){

    let obj = interviewbit(ib_handle);
    var promise = Promise.resolve(obj);

  promise.then(function(val) {
    // contestName.push(val.contests['1']['Contest']);
    // console.log(val.contests['1']['Contest']);

    document.getElementById('ib-rank').textContent = val.rank;
    document.getElementById('ib-score').textContent = val.score;
    document.getElementById('ib-streak').textContent = val.streak;

});
}

export default interviewbitGET;