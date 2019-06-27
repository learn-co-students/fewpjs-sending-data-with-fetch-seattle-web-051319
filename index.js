// Add your code here


function submitData(name, email) {
    // setting form data to equal arguments passed in
    let formData = {
        name: name,
        email: email
      };
    // configurating object by assinging pot method,
    // setting headers of content-type and accept to application/json
    // then stringifying the formData to make it able to be passed in a json response
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
      // starting fetch to hit the URL with the configuratwed object in hand
      return fetch("http://localhost:3000/users", configObj)
      // formatting resonse into reasable json
        .then(resp => resp.json())
        // creating an HTML element on the page with the json response
        .then(function(object){
            // creates new element fo just the object id on the page
            document.body.innerHTML = object["id"]
        })
        // catch if there are any erros and puts out the error message on the page
        .catch(function(error) {
          alert("Unauthorized Access");
          document.body.innerHTML = error.message;
        });
}

