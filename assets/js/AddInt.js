const userForm = document.querySelector("#Interaction")
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function addInt(event){
    event.preventDefault();
    const inputs = event.target.elements;
    
    const interaction = {
        note: inputs["detalle"].value,
        userId: inputs["userId"].value,
        costumerId: inputs["costumerId"].value,
        createdAt: date
    }

    console.log(interaction)

    const url = "http://localhost:3000/interaction"
    fetch(url, {
        method: "POST",
        body: JSON.stringify(interaction),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(user => console.log(interaction))

}

userForm.addEventListener("submit", addInt)