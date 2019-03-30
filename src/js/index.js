login: () => {
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
        signInSuccessUrl: 'index.html#/forum',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],


        // Terms of service url.
        tosUrl: 'index.html#/forum',
        // Privacy policy url.
        //privacyPolicyUrl: '<your-privacy-policy-url>'

      };
      ui.start('#firebaseui-auth-container', uiConfig);
    })()