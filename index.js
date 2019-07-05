// Add your code here

function submitData(name, email) {
  let arr = {name: name, email: email};
  let configObj = 
    { headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(arr)};


  fetch("http://localhost:3000/users", configObj)
  .then(function (response) {
    return response.json();
  }).then(function (json) {
    addToDom(json);
  }).catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
}

function addToDom (data) {
  let h = document.createElement("h2");
  h.textContent = data.id;
  let body = document.getElementById("shit")
  body.appendChild(h);
}

submitData("Tom", "email");