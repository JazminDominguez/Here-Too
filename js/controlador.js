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
            // Initialize the platform object:
            var platform = new H.service.Platform({
                'app_id': '{HsEaGUYIAiD705s8wzM4}',
                'app_code': '{ixHZvY2JGZsqHg92o9chOg}'
            });

            // Obtain the default map types from the platform object
            var maptypes = platform.createDefaultLayers();

            // Instantiate (and display) a map object:
            var map = new H.Map(
                document.getElementById('mapContainer'),
                maptypes.normal.map, {
                    zoom: 10,
                    center: {
                        lng: 13.4,
                        lat: 52.51
                    }
                });
        })

    }
})