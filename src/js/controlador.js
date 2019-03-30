libreria.controlador('miControlador', {

    prueba: () => {

        db = firebase.firestore();

        let title = document.getElementById('title').value;
        let age = document.getElementById('age').value;
        let description = document.getElementById('complaint').value;
        let violence = document.getElementById('type_of_violence').value;
        let place = document.getElementById('place').value;
        let workProfile = document.getElementById('work_profile').value;
        let sector = document.getElementById('work_sector').value;
        let denounced = document.getElementById('yes').checked;

        let saveButton = document.getElementById('guardar')
        saveButton.addEventListener('click', () => {
            db.collection("denuncias").add({
                    title: title,
                    age: age,
                    description: description,
                    type_of_violence: violence,
                    place: place,
                    sector: sector,
                    denounced: denounced,
                    profile: workProfile,
                })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    let title = document.getElementById('age').value = '';
                    let age = document.getElementById('name-place').value = '';
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        })
    },
    segundap: () => {},

    primerap: () => {

        let bttn = document.getElementById('button')
        bttn.addEventListener('click', (event) => {

            event.preventDefault();
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