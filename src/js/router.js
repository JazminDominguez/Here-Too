window.libreria.getId('vista').enrutar()
.ruta('/login', './Vistas/login.html', 'miControlador', null, null)

    .ruta('/', './Vistas/mapa.html', 'miControlador', function () {
        libreria.getctrl().segundap()
    })

    .ruta('/', './Vistas/info.html', 'miControlador', function () {
        libreria.getctrl().primerap()
    })

    .ruta('/segunda', './Vistas/mapa.html', 'miControlador', function () {
        libreria.getctrl().segundap()
    })

    .ruta('/tercera', './Vistas/denuncia.html', 'miControlador', function () {
        libreria.getctrl().prueba()
    })