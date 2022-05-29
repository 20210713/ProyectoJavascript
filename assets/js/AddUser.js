const userForm = document.querySelector("#User")

function addUser(event){
    event.preventDefault();
    const inputs = event.target.elements;
    
    const user = {
        name: inputs["nombre"].value,
        username: inputs["usuario"].value,
        password: inputs["contraseña"].value
    }

    console.log(user)

    const url = "http://localhost:3000/user"
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(user => console.log(user))

}

userForm.addEventListener("submit", addUser)