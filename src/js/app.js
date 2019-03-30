//función para el sidenav
let sideNavMenu =
  (function () {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        direction: 'left'
      });
    })
  })()
