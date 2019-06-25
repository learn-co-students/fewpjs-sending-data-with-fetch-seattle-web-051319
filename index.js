// Add your code here

function submitData(userName, userEmail){

  const header = document.createElement("h1")
  const body = document.getElementsByTagName('body')[0]

  let formData = {
    name: userName,
    email: userEmail
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  const fetchRequest = fetch("http://localhost:3000/users", configurationObject)
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      header.textContent = object.id;
      body.appendChild(header);
    })
    .catch(function(error){
      alert("UH-OH No Noes Are Happening");
      header.textContent = error.message;
      body.appendChild(header);
    })

  return fetchRequest
}

// let destinationURL = "http://localhost:3000/dogs"
//
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch(destinationURL, configurationObject)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object){
//     console.log(object);
//   })
//   .catch(function(error){
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });
