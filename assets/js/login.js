const miFormulario = document.querySelector("#Login")
const url = "http://localhost:3000/user"

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

function eventoSubmit(evento) {
        evento.preventDefault()
        const inputs = evento.target.elements;     
        
        usuario = inputs["usuario"].value,
        contraseña = inputs["contraseña"].value
        const elementoCaja = document.querySelector("#caja")

        

            callAPI(url, "GET", {}).then(logeo => {
                logeo.forEach(login => {
                    console.log(login.password)
                    console.log(login.username)
                    if((contraseña == "admin" && usuario == "admin") || (contraseña == login.password && usuario == login.username)){
                        elementoCaja.textContent = "Acceso Aprovado";
                        window.location.href = 'Home'
                    }else{
                        elementoCaja.textContent = "Acceso denegado";
                    }
                });
            })
}

miFormulario.addEventListener('submit', eventoSubmit)