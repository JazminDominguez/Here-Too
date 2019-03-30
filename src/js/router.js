window.libreria.getId('vista').enrutar()
.ruta('/login', './Vistas/login.html', 'miControlador', null, null)

    .ruta('/', './Vistas/login.html', 'miControlador', function () {
        libreria.getctrl().login()
    })

    .ruta('/', './Vistas/primera.html', 'miControlador', function () {
        libreria.getctrl().primerap()
    })

    .ruta('/segunda', './Vistas/segunda.html', 'miControlador', function () {
        libreria.getctrl().segundap()
    })

    .ruta('/tercera', './Vistas/tercera.html', 'miControlador', function () {
        libreria.getctrl().prueba()
    })