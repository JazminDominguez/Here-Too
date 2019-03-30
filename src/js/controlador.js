libreria.controlador('miControlador', {

    prueba: () => {
        let saveButton = document.getElementById('save_bttn')
        saveButton.addEventListener('click', () => {
            db.collection("denuncias").add({
                    title: title,
                    age: age,
                    description: description,
                    violence: violence,
                    place: place,
                })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    let textInput = document.getElementById('age').value = '';
                    let nametInput = document.getElementById('name-place').value = '';

                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        })
    },
    segundap: () => {},

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
                        lng: -99.163277,
                        lat: 19.421129
                    }
                }
            );
        })

    }
})