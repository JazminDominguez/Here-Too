libreria.controlador('miControlador', {
    prueba: () => {
        alert('Control OK')
    },
    segundap: () => {
        alert('Soy la segunda pagina')
    },
    primerap: () => {
        let bttn = document.getElementById('button')
        bttn.addEventListener('click', () => {
            alert('Soy la primera')
        })
        
    }
})