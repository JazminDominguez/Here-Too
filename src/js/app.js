//funcion para desloguear

let mainApp = {};

function logOut() {
  firebase.auth().signOut();
  window.location = 'login.html'
}
mainApp.logOut = logOut;

db = firebase.firestore()



//Crea los datos y los manda a Firestore
function send() {
  let userPost = JSON.parse(localStorage.getItem("user"));
  let textInput = document.getElementById('input').value;
  let areaSelected = document.getElementById('dropdown3').value;
  let privateMsgChecked = document.getElementById('private').checked;
  db.collection("state").add({
      name: userPost.displayName,
      area: areaSelected,
      first: textInput,
      uid: userPost.uid,
      private: privateMsgChecked,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      let textInput = document.getElementById('input').value = '';
      let nametInput = document.getElementById('name-input').value = '';

    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

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


    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, );
    });

    //Crea los datos y los manda a Firestore
function denuncias() {
  let userPost = JSON.parse(localStorage.getItem("user"));
  let title = document.getElementById('title').value;
  let age = document.getElementById('age').value;
  let description = document.getElementById('complaint').value;
  let violence = document.getElementById('type_of_violence').value;
  let place = document.getElementById('place').value;
  console.log(title, age, violence)

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
}