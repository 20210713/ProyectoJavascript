const url = "http://localhost:3000/costumer"

function getParam(param) {
    const params = new URLSearchParams(window.location.search)
    return params.get(param)
}

function callAPI(url,method, data) {
    let configuracion = {};
    const header = {
        'Content-Type': 'application/json'
    }
    
    if (method === "GET") {
        configuracion = {
            method: method,
            headers: header
        }
    
    } else {
        configuracion = {
            method: method,
            body: JSON.stringify(data),
            headers: header
        }
    }

    return fetch(url, configuracion)
    .then(response => {
        return response.json()
    })
}

window.addEventListener("load", event=> {
    const id = getParam("id");
    callAPI(`${url}/${id}`, "GET", {})
    .then( cliente => {
        const clienteForm = document.querySelector("#cliente-form")
        clienteForm.elements["id"].value = cliente.id
        clienteForm.elements["nombre"].value = cliente.name
        clienteForm.elements["correo"].value = cliente.email
        clienteForm.elements["direccion"].value = cliente.address
    })
})



// Proceso de salvado de cliente para editarlo

// 1. obtener formulario
const clienteForm = document.querySelector("#cliente-form")


// 2. crear funcion del formulario
function salvarCliente(event) {
    event.preventDefault()

    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    const cliente = {
        id: inputs["id"].value,
        name: inputs["nombre"].value,
        email: inputs["correo"].value,
        address: inputs["direccion"].value,
    }

    // 2. enviar datos al API
    callAPI(`${url}/${cliente.id}`, "PUT", cliente)
    .then( () => {
        if (confirm(`Desea volver al listado de clientes?`)) {
            window.history.back()
        }
    })
    
}


// 3. Agregar evento al formulario
clienteForm.addEventListener("submit", salvarCliente)