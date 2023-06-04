const formulario = document.querySelector('.form'); //Seleccionar el formulario que contiene los campos para escribir.


formulario.addEventListener('submit', (e) =>{ //Evento que se ejecuta al hacer click en el botón, hace la acción "SUBMIT" (Enviar).
    
    const nombre = document.querySelector('.nombre').value;//Guardar en una variable llamada "nombre", el valor(Lo que coloque la persona) del campo "nombre".
    
    const edad = document.querySelector('.edad').value;//Lo mismo de arriba asjsjasjsasj
    const profesion = document.querySelector('.profesion').value;//Lo mismo de arriba asjsjasjsasj
    const email = document.querySelector('.email').value;//Lo mismo de arriba asjsjasjsasj
    const numero = document.querySelector('.edad').value;//Lo mismo de arriba asjsjasjsasj
    
    if (!nombre || !edad || !profesion || !email || !numero) {//Condicional que evalua si alguno de los campos está vacio, ejemplo: Si "!nombre"(Nombre no existe), 
        //entonces muestra un mensaje "alert('Hay un campo vacio')" y no envia nada para evitar ese tipo de Spam con envios vacios a 
        //la base de datos.
        
        e.preventDefault(); //Evita que se recargue la pagina.
        alert('Hay un campo vacío');//Mensaje que aparece si se cumple la condición.
        
    }
    
    
    else{ // (Si no, entonces....)
        e.preventDefault(); //Evita que se recargue la pagina.
        let enviado = document.querySelector('.enviado');
        enviado.style.display = 'flex';
        formulario.style.display = 'none';
        fetch('https://sheet.best/api/sheets/97f9a310-9b43-458c-942b-822555477341',{//Api-Link que enviará la informacion a la base de datos (Lo de abajo son objetos a donde debo ingresar si o si).
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            "Nombre": nombre,//En el campo "Nombre" en la Base de datos(Excel), añadirá el valor del campo "nombre"
            
            "Edad": edad,//Lo mismo de arriba asjsjasjsasj
            "Profesión": profesion,//Lo mismo de arriba asjsjasjsasj
            "Correo": email,//Lo mismo de arriba asjsjasjsasj
            "Numero": numero,//Lo mismo de arriba asjsjasjsasj
            })
        }) 
        
    }

})




