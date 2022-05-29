const userForm = document.querySelector("#Client")
var today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function addClient(event){
    event.preventDefault();
    const inputs = event.target.elements;
    
    const client = {
        name: inputs["nombre"].value,
        email: inputs["email"].value,
        address: inputs["direccion"].value,
        createdAt: date
    }

    console.log(client)

    const url = "http://localhost:3000/costumer"
    fetch(url, {
        method: "POST",
        body: JSON.stringify(client),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(user => console.log(client))

}

userForm.addEventListener("submit", addClient)