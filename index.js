function submitData(userName, userEmail) {
	let submitUrl = "http://localhost:3000/users";
	let formData = {
		name: userName,
		email: userEmail
	};
	
	let configObj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(formData)
	};
	
	return fetch(submitUrl, configObj)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			document.body.textContent = json.id;
		})
		.catch(function(error) {
			document.body.textContent = error.message;
		});
}