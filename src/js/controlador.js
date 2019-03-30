libreria.controlador('miControlador', {
  
    prueba: () => {
        alert('Control OK')
    },
    segundap: () => {
        
            (function () {
                var ui = new firebaseui.auth.AuthUI(firebase.auth());
                var uiConfig = {
                    callbacks: {
                        signInSuccessWithAuthResult: function (authResult, redirectUrl) {

                            return true;
                        },
                        uiShown: function () {
                            document.getElementById('loader').style.display = 'none';
                        }
                    },
                    signInFlow: 'popup',
                    signInSuccessUrl: 'index.html#/tercera',
                    signInOptions: [
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                        firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    ],


                    // Terms of service url.
                    tosUrl: 'index.html#/tercera',
                    // Privacy policy url.
                    //privacyPolicyUrl: '<your-privacy-policy-url>'

                };
                ui.start('#firebaseui-auth-container', uiConfig);
            })()
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
                        lng: -99.163277,
                        lat: 19.421129
                    }
                }
            );
        })

    }
})