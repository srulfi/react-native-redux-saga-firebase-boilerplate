import firebase from 'react-native-firebase';

export default class FirebaseService {
  static database = firebase.database();

  static getDatabase() {
    return FirebaseService.database
      .ref()
      .once('value')
      .then(snapshot => snapshot.val());
  }
}
