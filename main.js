const url = "http://localhost:3000/api"

function getUser(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }

    })
    .then(response => response.json())
    .then(data => alertApi.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUsers(){
    fetch(`${url}/3`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
    })
}

const newUser = {
    name: "Laly",
    age: 19,
    city: "Tokyo"
}

//addUser(newUser)
getUsers()
//getUser()