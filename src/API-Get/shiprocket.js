const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function shiprocket(shipment_id){

    

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "ashish.kataria+hackathon@shiprocket.com",
  "password": "hackathon@2022"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

var url = "https://apiv2.shiprocket.in/v1/external/courier/track/shipment/" + shipment_id;

fetch("https://apiv2.shiprocket.in/v1/external/auth/login", requestOptions)
  .then(response => response.text())
  .then(result  => {
      
    console.log(result);
    result = JSON.parse(result);
    console.log(result['token']);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + result.token);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
          
        result = JSON.parse(result);

        console.log(result);

        let promise = Promise.resolve(result);

        promise.then(function(val) {
            let ff = val.tracking_data.shipment_track[0];
            console.log(ff.consignee_name)

            document.getElementById('sr-awb-code').textContent = ff.awb_code;
            document.getElementById('sr-consignee-name').textContent = ff.consignee_name;
            document.getElementById('sr-current-status').textContent = ff.current_status;
            document.getElementById('sr-destination').textContent = ff.destination;
            document.getElementById('sr-origin').textContent = ff.origin;
        
        });

        
    
    })
      .catch(error => console.log('error', error));


     })
  .catch(error => console.log('error', error));
  

  


}


// function shiprocketGET(shipment_id){
//     sh

// }


console.log(localStorage.getItem("token"));



export default shiprocket;