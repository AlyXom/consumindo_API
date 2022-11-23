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

const newUser = {
    name: "João",
    age: 19,
    city: "São Paulo"
}

addUser(newUser)

getUser()