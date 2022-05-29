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

function agregarEventoBorrarCliente(button, cliente) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${cliente.name}?`)) {
            callAPI(`${url}/${cliente.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}

window.addEventListener("load", event=> {
    callAPI(url, "GET", {}).then( clientes => {
        const elementoListado = document.querySelector("#listado-clientes")

        clientes.forEach(cliente => {
            const elemtPost = document.createElement("li")
            const link = document.createElement("a")
            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarCliente(buttonBorrar, cliente)
            link.href = `EditClients?id=${cliente.id}`
            link.textContent = `Id: ${cliente.id} | Nombre: ${cliente.name}. | E-mail: ${cliente.email} | Direccion: ${cliente.address}.`
            elemtPost.appendChild(link)
            elementoListado.appendChild(elemtPost)
            elementoListado.appendChild(buttonBorrar)
        });
    })
})

