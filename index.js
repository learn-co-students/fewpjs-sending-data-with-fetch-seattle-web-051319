// Add your code here




function submitData(name, email){
  let formData = {
    name: name,
    email: email
  };

  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };


  return fetch("http://localhost:3000/users", configurationObject)
  .then(resp => resp.json())
  .then(function(object) {
    document.body.textContent = object.id
    console.log(object.id);
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    document.body.textContent = error.message;
  });
}


submitData("sam", "emails@email")
