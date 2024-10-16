const lamp=document.querySelector(".but1");
let estado = false
let datos
const url = 'https://fssrxrr0-3000.usw3.devtunnels.ms//datos';


lamp.addEventListener("click",function(){




    if (!estado){
        lamp.classList.add("on")
        estado=true
        datos={estado:"encendido"}
    }
    else{
        lamp.classList.remove("on")
        estado=false
        datos={estado:"apagado"}
    }
    

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json()) 
    .then(data => console.log('Éxito:', data)) 
    .catch((error) => {
        console.error('Error:', error);
    });


});


