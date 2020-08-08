import auth from '@react-native-firebase/auth';

export function login() {
  auth()
    .signInAnonymously()
    .then(() => {
      console.info('User signed in anonymously');
      return true;
    })
    .catch((error) => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      console.error(error);
      return talse;
    });
}

export function logout() {
  auth()
    .signOut()
    .then(() => {
      console.info('User signed out!');
      return true;
    });
}

export function onAuthStateChanged(handleAuthState) {
  return auth().onAuthStateChanged(handleAuthState);
}
